export const API_URL = "http://localhost:3000";

// Querykey factory pattern : 캐시 데이터를 한곳에서 관리하여 mutation, query에서 사용되는 하드코딩 중복을 방지하고 코드의 가독성을 높이기 위해 사용
export const QUERY_KEYS = {
  todo: {
    all: ["todo"],
    list: ["todo", "list"],
    detail: (id: string) => ["todo", "detail", id],
  },
};
