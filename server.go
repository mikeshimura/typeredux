package main

import (
	"github.com/gin-gonic/gin"
	"github.com/mikeshimura/typeredux/web"
)

func main() {

	r := gin.Default()
	r.GET("/", web.IndexHtml)
	r.Static("/static", "./static")
	r.Run(":8000")
}
