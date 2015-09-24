call tsc -p .

IF %ERRORLEVEL% NEQ 0 (
  goto send
)

gulp

:send