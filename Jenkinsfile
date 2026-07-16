pipeline {
    agent any
    
    stages {
        stage('checkout') {
            steps {
                checkout SCM
            }
        }
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
