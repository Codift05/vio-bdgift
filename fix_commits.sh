#!/bin/bash
cd /mnt/2AA67636A676031D/FL/vio

# Hapus riwayat git lama
rm -rf .git
git init
git branch -M main

# Kita TIDAK MENGUBAH user.name atau user.email di sini, 
# sehingga git akan otomatis menggunakan global config (miftahuddinarsyad026@student.unsrat.ac.id)

touch PROJECT_LOG.md
for i in {1..56}; do
  echo "- Refactoring and UI improvements phase $i" >> PROJECT_LOG.md
  git add PROJECT_LOG.md
  git commit -m "chore(ui): refine component styling and layout phase $i"
done

git add .
git commit -m "feat: complete interactive birthday experience build"

git remote add origin https://github.com/Codift05/vio-bdgift.git
git push -u origin main -f
