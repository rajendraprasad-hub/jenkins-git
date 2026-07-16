pipeline {
    agent any

    tools {
        nodejs 'Nodejs_18'
    }
    
    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
