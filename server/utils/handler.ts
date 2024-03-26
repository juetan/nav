class RawResponse<T = any> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}

export class ApiResponse<T = any> {
  /**
   * 业务状态码
   * @example 0
   */
  code!: number;

  /**
   * 业务描述
   * @example "成功"
   */
  message!: string;

  /**
   * 数据
   * @example {}
   */
  data?: T;

  /**
   * 数据总数
   * @example 100
   */
  total?: number;

  /**
   * 构造函数
   */
  constructor(code: number, message: string, data?: T, total?: number) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.total = total;
  }

  /**
   * 返回成功响应
   */
  static ok<T = any>(data?: T, total?: number) {
    return new ApiResponse(0, '成功', data, total);
  }

  /**
   * 返回失败响应
   */
  static error<T = any>(message = '失败', data?: T, total?: number) {
    return new ApiResponse(1, message, data, total);
  }

  /**
   * 返回失败响应
   */
  static raw<T = any>(data?: T) {
    return new RawResponse(data);
  }
}

/**
 * 定义API处理器，包装返回数据。
 * @example
 * ```ts
 * {
 *   code: 0,
 *   message: "成功",
 *   data: [],
 *   total: 100,
 * }
 * ```
 */
export const defineApiHandler = (handler: Parameters<typeof defineEventHandler>[0]) => {
  return defineEventHandler(async (event) => {
    try {
      const res = await handler(event);
      if (res instanceof ApiResponse) {
        return res;
      }
      if (res instanceof RawResponse) {
        return res;
      }
      if (Array.isArray(res) && res.length === 2 && Array.isArray(res[0]) && typeof res[1] === 'number') {
        return ApiResponse.ok(res[0], res[1]);
      }
      return ApiResponse.ok(res);
    } catch (error: any) {
      if (import.meta.dev) {
        throw error;
      }
      setResponseStatus(error.statusCode ?? 500);
      return ApiResponse.error(error.message);
    }
  });
};
