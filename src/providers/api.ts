import { PostsApi, PublicationApi } from "./gen";

export const postApi = () => new PostsApi();
export const publicationApi = () => new PublicationApi()