다중 컨테이너 환경 배포 실습

---

# branch: aws-eb-linux1
elastic beanstalk에서는 더 이상 linux1을 지원하지 않고, linux2를 지원한다.

linux2는 `docker-compose.yml`이 `Dockerrun.aws.json` 파일을 대신해서 컨테이너를 실행한다.

따라서, `Dockerrun.aws.json` 파일은 생성하지 않아도 된다.

---

# 해당 브랜치는,
`docker-compose.yml` 파일이 아닌 `Dockerrun.aws.json` 파일을 이용해서 eb 환경을 구축한다.