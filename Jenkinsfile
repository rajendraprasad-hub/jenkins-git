pipeline {
    agent any
    
    tools {
        nodejs "NodeJS_18"
    }
    parameters {
        choice (
            name: 'ENV',
            choices: ['dev','qa','prod'],
            description: 'Please select the ENV'
        )
        string (
            name: 'Version',
            defaultValue: '1.0',
            description: 'Enter application version'
        )
        booleanParam (
            name: 'Deploy',
            defaultValue: 'true',
            description: 'Deploy Application?'
        )
    }
    
        stages {
            stage('Check Out') {
                steps {
                    git branch: 'main',
                        url: 'https://github.com/rajendraprasad-hub/jenkins-git.git'
                }
            }
            stage('Build') {
                steps {
                    sh 'npm install'
                }
            }
            stage('Test') {
                steps {
                    sh 'npm test'
                }
            }
            stage("Deploy_Qa") {
                when {
                    allOf {
                        expression { params.Deploy }
                        expression { params.ENV == "qa" }
                        expression { params.Version == "2.0" }
                    }
                }
                steps {
                    sh 'timeout 30s npm start || true'
                }
            }
            stage(Deploy_Prod) {
                when {
                    allOf {
                        expression { params.Deploy }
                        expression { params.ENV == "prod" }
                    }
                }
                steps {
                    sh 'timeout 30s npm start || true'
                }
            }
        }
        post {
            success {
                echo "Build-Test Successfully completed and Deploy in ${params.ENV} Environmet"
            }
            failure {
                echo "Build is failed please check the logs"
            }
            aborted {
                echo "Build Is forcefully stoped by someone"
            }
            cleanup {
                echo "Cleaning Done"
            }
        }
        }
    
    
