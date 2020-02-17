import React from "react";
import { StudySet } from "../../utils/quizlet";
import styles from "./StudySetCard.module.scss";
import { H5, Text } from "../basic/Typography";
import Twemoji from "react-twemoji";
import moment from "moment";

export class StudySetCard extends React.Component<{ studySet: StudySet }> {
  render() {
    const { studySet } = this.props;

    return (
      <div className={styles.cardWrapper}>
        <a className={styles.studySetCard} href={studySet.url}>
          <p className={styles.timestamp}>
            <Text>
              {moment(studySet.timestamp)
                .locale("sv")
                .format("DD MMMM YYYY")}
            </Text>
          </p>
          <H5>{studySet.name}</H5>
          <div className={styles.categories}>
            {studySet.categories.map((category, index) => {
              return <Twemoji key={index}>{category}</Twemoji>;
            })}
          </div>
        </a>
      </div>
    );
  }
}
