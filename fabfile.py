import sys

from fabric.api import *

env.user = 'admin'
env.hosts = ['101.132.169.91']

def deploy():
    local('npm run build')
    with lcd('./dist'):
        local('tar czvf a301web.tar *')
        put('a301web.tar', '/tmp/a301web.tar')
        local('rm -rf a301web.tar')
    with cd('/home/admin/a301'):
        run('rm -rf *')
        run('tar xzvf /tmp/a301web.tar')
    

