package main

import (
	"github.com/gin-gonic/gin"
	"typeredux/web"
)

func main() {

	r := gin.Default()
	r.GET("/", web.IndexHtml)
	r.Static("/static", "./static")
	r.Run(":8000")
}
