rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:Yand-hi/endless-ui.git &&
git push -f -u origin main &&
cd -
echo https://yand-hi.github.io/endless-ui/index.html