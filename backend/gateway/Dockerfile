FROM alpine

RUN wget https://github.com/nautilus/gateway/releases/download/v0.3.9/gateway_linux_amd64 -O /usr/local/bin/gateway && \
  chmod +x /usr/local/bin/gateway

ENV SERVICES=""

CMD /usr/local/bin/gateway start --services ${SERVICES}