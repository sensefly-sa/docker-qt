FROM ubuntu:xenial

ENV QT_MAJOR_VERSION 5.10
ENV QT_MINOR_VERSION 1
ENV QT_VERSION $QT_MAJOR_VERSION.$QT_MINOR_VERSION

COPY ./qt-installer.js /qt-installer/
ADD http://download.qt.io/official_releases/qt/$QT_MAJOR_VERSION/$QT_VERSION/qt-opensource-linux-x64-$QT_VERSION.run /qt-installer/

RUN \
  apt-get update && \
  apt-get install -y lsb-release software-properties-common && \
  add-apt-repository "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) main universe restricted multiverse"  && \
  apt-get update && \
  apt-get install -y build-essential \
    libx11-6 \
    libx11-xcb1 \
    libfontconfig1 && \
  apt-get clean && \
  chmod +x /qt-installer/qt-opensource-linux-x64-$QT_VERSION.run && \
  /qt-installer/qt-opensource-linux-x64-$QT_VERSION.run --platform minimal --verbose --script /qt-installer/qt-installer.js

ENV PATH /lib/qt5/$QT_VERSION/gcc_64/bin:$PATH