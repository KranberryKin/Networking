export class Posts {
  constructor(postData) {
    this.id = postData.id
    this.imgUrl = postData.imgUrl
    this.creator = postData.creator || {}
    this.body = postData.body
    this.likes = postData.likes
    this.likeIds = postData.likeIds
    this.creatorId = postData.creatorId
    this.createdAt = postData.createdAt
  }
}
