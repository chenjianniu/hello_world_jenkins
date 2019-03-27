#!/bin/bash

cd /var/jenkins_home/workspace/jenkins_hello_world_1
npm i
nohup node /var/jenkins_home/workspace/jenkins_hello_world_1/hello.js &