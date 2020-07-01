export interface IDiscordAPIMessageAttachment {
  id: string;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
}

export class MessageAttachment {
  id: string;
  filename: string;
  size: number;
  url: string;
  proxyUrl: string;
  height?: number;
  width?: number;

  constructor({
    id,
    filename,
    size,
    url,
    proxy_url,
    height,
    width,
  }: IDiscordAPIMessageAttachment) {
    this.id = id;
    this.filename = filename;
    this.size = size;
    this.url = url;
    this.proxyUrl = proxy_url;
    this.width = width;
    this.height = height;
  }
}
