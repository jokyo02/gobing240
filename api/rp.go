package api

import (
	"adams549659584/go-proxy-bingai/common"
	"adams549659584/go-proxy-bingai/common/helper"
	"net/http"
	"strings"
)

func Th(w http.ResponseWriter, r *http.Request) {
	if !helper.CheckAuth(r) {
		helper.UnauthorizedResult(w)
		return
	}
	r.URL.Path = strings.ReplaceAll(r.URL.Path, "/rp/", "/web/rp/")
	common.NewSingleHostReverseProxy(common.BING_RPURL).ServeHTTP(w, r)
}
