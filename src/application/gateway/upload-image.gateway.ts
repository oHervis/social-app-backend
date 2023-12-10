export interface UploadImageGateway {
  uploadImage(image: string): Promise<string>;
}
