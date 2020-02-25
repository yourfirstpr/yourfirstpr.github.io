![Header](README_header.png)

## 로컬 구성 및 실행

**Your First PR** 을 로컬에서 실행하는 데 관심이있는 경우, 이 프로젝트는 [Jekyll] (https://jekyllrb.com/)을 사용합니다. [Jekyll]. (https://jekyllrb.com/)은 Ruby로 작성된 블로그 인식 정적 사이트 생성기이며 오픈 소스 라이센스로 배포됩니다.

첫 번째 단계는이 저장소를 복제하고 폴더로 이동하는 것입니다:

```
git clone https://github.com/yourfirstpr/yourfirstpr.github.io.git
cd yourfirstpr.github.io
```

다음으로 Bundler를 사용하여 종속성을 설치하십시오:

```
bundle
```

번 들러를 설치하지 않은 경우 다음 Ruby 명령을 실행하십시오:

```
gem install bundler
```

이제 다음 명령을 사용하여 Jekyll을 로컬에서 실행할 수 있습니다:

```
bundle exec jekyll serve
```

이게 전부입니다. – 이제 준비가되었습니다! `http://localhost:4000`로 접속하세요.

다른 포트를 사용하려면 다음과 같이`-P` 옵션을 제공하십시오:

```
bundle exec jekyll serve -P 4242
```
