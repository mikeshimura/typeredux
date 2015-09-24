package web

import (
	"github.com/gin-gonic/gin"
)

const (
	index = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>typescript-react-example</title>
<link rel="stylesheet" href="/static/css/bootstrap.css">
<link rel="stylesheet" href="/static/lib/sweetalert.css">
<script type="text/javascript" src="/static/lib/react.js"></script>
<script type="text/javascript" src="/static/lib/immutable.js"></script>
<script type="text/javascript" src="/static/lib/sweetalert-dev.js"></script>
<script type="text/javascript" src="/static/lib/jquery.js"></script>
</head>
<body>

<div id="main"></div>
<script src="/static/dist/bootstrap.js"></script>

</body>
</html>
`
)

func IndexHtml(c *gin.Context) {
	x:=c
	x=x
	c.HTMLString(200, index)
}
