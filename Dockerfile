FROM node:alpine
LABEL authors="marty"
WORKDIR /app
COPY build/index.js package.json /app/
EXPOSE 3000
RUN adduser -S user \
    && chown -R user /app
USER user
CMD ["node", "index.js"]