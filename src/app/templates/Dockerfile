FROM registry.aliyuncs.com/vauto/docker-ubuntu

MAINTAINER Leo Liu <zmliu0077@gmail.com>

EXPOSE 9001

RUN mkdir -p /data

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN cp -a /tmp/node_modules /data

WORKDIR /data
ADD . /data

CMD ["sails","lift","--prod"]
