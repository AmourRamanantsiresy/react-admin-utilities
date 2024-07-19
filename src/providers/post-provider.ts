import axios from "axios";
import { postApi, publicationApi } from "./api";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const conf = axios.create({ baseURL: "url" });
conf.get("/posts", {
  params: {
    page: 1,
    perPage: 10,
  },
});

export const postProvider = {
  async getList(
    resource: string,
    params: { pagination: { page: number; perPage: number } }
  ) {
    const { pagination } = params;
    const { page, perPage } = pagination;

    if (resource === "posts") {
      const { data = [] } = await postApi().getAll();
      return Promise.resolve({
        data: ((data || []) as Post[]).slice(
          perPage * page,
          perPage * page + perPage
        ),
        pageInfo: { hasNextPage: false, hasPreviousPage: false },
        total: data.length,
      });
    }
  },
  async getOne(resource: string, params: { id: number }) {
    const { id } = params;
    if (resource === "posts") {
      const { data } = await publicationApi().getById(id);
      return {
        data,
      };
    }
  },
  async create(resource: string, params: { data: Post }) {
    const { data: domainData } = params;

    if (resource === "posts") {
      const { data: restData } = await postApi().createAll(domainData);
      return {
        data: restData,
      };
    }
  },
  async update(resource: string, params: { data: Post; id: number }) {
    const { data: domainData, id } = params;

    if (resource === "posts") {
      const { data: restData } = await publicationApi().updateOne(
        id,
        domainData
      );
      return {
        data: restData,
      };
    }
  },
};



postApi().getAll()