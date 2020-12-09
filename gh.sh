git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='gborodulin'
    GIT_AUTHOR_EMAIL='borogreg@gmail.com'
    GIT_COMMITTER_NAME='gborodulin'
    GIT_COMMITTER_EMAIL='borogreg@gmail.com'
  " HEAD
