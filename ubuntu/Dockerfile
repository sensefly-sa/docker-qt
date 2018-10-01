FROM ubuntu:bionic

ENV QT_MAJOR_VERSION 5.11
ENV QT_MINOR_VERSION 2
ENV QT_VERSION $QT_MAJOR_VERSION.$QT_MINOR_VERSION

COPY ./qt-installer.js /qt-installer/
ADD http://download.qt.io/official_releases/qt/$QT_MAJOR_VERSION/$QT_VERSION/qt-opensource-linux-x64-$QT_VERSION.run /qt-installer/

RUN \
  chmod +x /qt-installer/qt-opensource-linux-x64-$QT_VERSION.run && \
  apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y \
    mesa-common-dev \
    libx11-xcb1 \
    libdbus-1-3 \
    libfontconfig1 && \
  apt-get clean && \
  /qt-installer/qt-opensource-linux-x64-$QT_VERSION.run --platform minimal --verbose --script /qt-installer/qt-installer.js && \
  rm -rf /qt-installer && \
  rm -rf /lib/qt5/Docs && \
  rm -rf /lib/qt5/Examples && \
  rm -rf /lib/qt5/Tools && \
  rm -rf /lib/qt5/MaintenanceTool*

ENV PATH /lib/qt5/$QT_VERSION/gcc_64/bin:$PATH
