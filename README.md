# rosbridge-usage

## Description
This repository provides a basic usage and related files for rosbridge.

Users can:
- set up simulator on linux host and access via web interface.
- learn the essential structure for rosbridge.
- have source and scripts.

## Maintainer
- [SJ Kim](http://bus710.net)<<bus710@gmail.com>>

## Table of contents
- [Description](#description)
- [Requirement](#requirement)
- [Installation](#installation)
- [Launch](#launch)
- [Commentary](#commentary)
- [Reference](#reference)

## Requirement
- Ubuntu 14.04
- ROS Indigo Desktop Full
- git
- node & npm

## Installation
```
cd ~
sudo apt-get install nodejs npm
sudo apt-get install ros-indigo-rosbridge-*
sudo apt-get install ros-indigo-turtlesim-*
git clone http://github.com/bus710/rosbridge-usage.git
cd ~/rosbridge-usage
npm install
```

## Launch
```
# run below commands in each terminal.
roscore
rosrun turtlesim turtlesim_node
rosrun turtlesim turtle_teleop_key
roslaunch rosbridge_server rosbridge_websocket.launch

# run below commands in one terminal
cd ~/rosbridge-usage
node app.js

# access your linux host from another device via web browser.
# the address might be 192.168.0.x and the port is 3000.
```

## Commentary

## Reference
- http://wiki.ros.org/rosbridge_suite
- http://iguanatronics.com/simple-tutorial-on-rosbridge-and-roslibjs/
- https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server
