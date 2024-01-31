FROM nginx:latest 

RUN [ -e /etc/nginx/conf.d/default.conf ] && rm /etc/nginx/conf.d/default.conf || true
COPY nginx.conf /etc/nginx/conf.d

RUN nginx -t
CMD [ "nginx", "-g", "daemon off;" ]