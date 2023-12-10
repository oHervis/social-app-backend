import { randomUUID } from "crypto";

export class S3UploadImageGateway {
  readonly s3: any;
  constructor() {
    // this.s3 = new aws_sdk.S3();
  }
  async uploadImage(image: string) {
    // const bucket = process.env.AWS_BUCKET;
    // const key = `${randomUUID}.jpg`;
    // const url = `https://${bucket}.s3.amazonaws.com/${key}`;
    // await this.s3
    //   .putObject({
    //     Bucket: bucket,
    //     Key: key,
    //     Body: Buffer.from(image, "base64"),
    //     ACL: "public-read",
    //   })
    //   .promise();
    // return url;
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw_2VuRMcjNHMTK-kQXsvzz4YKSN0Kyi76kTwVedl-5d2kXsvifSMmFh-EoQXFfENl10&usqp=CAU";
  }
}
