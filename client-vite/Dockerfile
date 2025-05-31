############################  build stage  ############################
FROM node:18-alpine AS build
WORKDIR /app

# 1️⃣ 复制包管理文件并安装依赖
COPY package.json pnpm-lock.yaml* ./
#   如果你用 npm/yarn，请把下面三行改成相应命令
RUN corepack enable \
 && pnpm install --frozen-lockfile

# 2️⃣ 复制源码并构建
COPY . .
RUN pnpm run build               # 输出到 /app/dist

###########################  runtime stage  ###########################
FROM nginx:stable-alpine
# 3️⃣ 自定义 Nginx 反向代理配置
COPY nginx.conf /etc/nginx/nginx.conf

# 4️⃣ 拷贝静态产物
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
