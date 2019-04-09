#!/bin/bash

cd /var/jenkins_home/workspace/hello_world_jenkins
npm i
nohup node /var/jenkins_home/workspace/hello_world_jenkins/hello.js &
