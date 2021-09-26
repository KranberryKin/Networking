import { AppState } from '../AppState'
import { Posts } from '../Models/Posts'
import { api } from './AxiosService'

class PostsService {
  async getPosts() {
    const res = await api.get('/api/posts')
    AppState.posts = res.data.posts.map(p => new Posts(p))
  }
}

export const postsService = new PostsService()
