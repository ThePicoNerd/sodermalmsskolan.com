import { PostsOrPages, Tag, PostOrPage } from "@tryghost/content-api";
import { getPostsByTag, getPosts, getPostBySlug } from "../api/ghost/post";
import { Subject } from "./Subject";
import { getTags } from "../api/ghost/tag";
import useSWR from "swr";
import { DigibruhCollection } from "./Collection";
import { Field } from "./Field";

/**
 * A static variant of `Digibruh`, used mostly for SSR (because you cannot serialize classes with JSON).
 */
export interface DigibruhStatic {
  tags: Tag[];
}

/**
 * A tag manager for Digibruh.
 */
class DigibruhTagArray extends Array<Tag> {
  /**
   * Fetch all `Tag`s whose slug has a prefix matching `Digibruh.tagPrefix`.
   */
  static async fetch(): Promise<DigibruhTagArray> {
    const tags = await getTags();

    let array = new DigibruhTagArray();

    tags.forEach((tag) => {
      array.push(tag);
    });

    return array;
  }

  fields(subjectSlug = DigibruhCollection.tagWildcard): Field[] {
    return this.filter((tag) => Field.regExp(subjectSlug).test(tag.slug)).map(
      (tag) => new Field(tag)
    );
  }

  subjects(): Subject[] {
    return this.filter((tag) => Subject.regExp().test(tag.slug)).map((tag) => {
      let subject = new Subject(tag, []); // Create a subject with no fields now, they will be added when we know the slug of the subject.

      subject.fields = this.fields(subject.slug);
      return subject;
    });
  }
}

export default class Digibruh {
  /**
   * Global tag prefix used on the Ghost backend to differentiate Digibruh posts from non-Digibruh posts.
   */
  static tagPrefix = "hash-skola";

  public tags: DigibruhTagArray;

  get fields(): Field[] {
    return this.tags.fields();
  }

  get subjects(): Subject[] {
    return this.tags.subjects();
  }

  getSubjectBySlug(slug: string): Subject | null {
    return this.subjects.find((subject) => subject.slug == slug) || null;
  }

  getFieldBySlug(subjectSlug: string, fieldSlug: string): Field | null {
    return (
      this.fields.find(
        (field) => field.subjectSlug == subjectSlug && field.slug == fieldSlug
      ) || null
    );
  }

  async fetchPostBySlug(slug: string): Promise<PostOrPage | null> {
    const post = await getPostBySlug(slug);

    if (!post.tags.find((tag) => tag.slug == Digibruh.tagPrefix)) {
      return null;
    }

    return post;
  }

  static fetchAllPosts = async (): Promise<PostsOrPages> => {
    return getPostsByTag(Digibruh.tagPrefix, "all");
  };

  static fetchPostsByAuthor = async (slug: string): Promise<PostsOrPages> => {
    return getPosts("all", `authors.slug:${slug}+tag:${Digibruh.tagPrefix}`);
  };

  static async initialize(): Promise<Digibruh> {
    return new Digibruh({ tags: await DigibruhTagArray.fetch() });
  }

  constructor(options: DigibruhStatic) {
    this.tags = new DigibruhTagArray(...options.tags);
  }

  toStatic(): DigibruhStatic {
    return {
      tags: new Array(...this.tags),
    };
  }
}

export const useDigibruh = (initialData?: Digibruh) =>
  useSWR("/digibruh", Digibruh.initialize, {
    initialData,
  });