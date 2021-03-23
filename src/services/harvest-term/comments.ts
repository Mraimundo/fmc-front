import { pluginApi } from 'services/api';
import { CommentApi, Comment } from './interface';
import { transformFromCommentApi } from './transformers';

const COMMENT_RESOURCE = '/agreement-term-comments';

interface CommentRequest {
  commentId: number;
  comment: string;
}

interface ApiResponse {
  data: CommentApi[];
  pagination: {
    page_total: number;
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export const addComment = async ({
  commentId,
  comment,
}: CommentRequest): Promise<void> => {
  await pluginApi.post<void>(`${COMMENT_RESOURCE}/add/${commentId}`, comment);
};

export const getComments = async (commentId: number): Promise<Comment[]> => {
  const { data } = await pluginApi.get<ApiResponse>(
    `${COMMENT_RESOURCE}?agreement_term_id=${commentId}`,
  );

  return transformFromCommentApi(data.data);
};
