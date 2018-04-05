FROM ubuntu:xenial

ENV QT_VERSION 5.10

COPY ./qt-installer.js /qt-installer/
ADD http://download.qt.io/official_releases/qt/5.10/5.10.1/qt-opensource-linux-x64-5.10.1.run /qt-installer/

RUN \
  apt-get update && \
  apt-get install -y lsb-release software-properties-common && \
  add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) main universe restricted multiverse"  && \
  apt-get update && \
  apt-get install -y build-essential && \
  apt-get clean && \
  chmod +x /qt-installer/qt-opensource-linux-x64-5.10.1.run && \
  /qt-installer/qt-opensource-linux-x64-5.10.1.run --platform minimal --verbose --script /qt-installer/qt-installer.js

ENV PATH /lib/qt5/5.10.1/gcc_64/bin:$PATH