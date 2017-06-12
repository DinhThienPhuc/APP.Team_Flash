const gulp = require("gulp")
const browserify = require("browserify")
const source = require("vinyl-source-stream")

// gulp.task("bundle", () => { 	console.log("vao day") 	return
// browserify("src/app.js") 		.transform("babelify", { presets: "react" })
// 		.bundle() 		.pipe(source("bundle.js")) 		.pipe(gulp.dest("static/")) })

gulp.task("watch", () => {
    const b = browserify({
        entries: ["src/app.js"],
        cache: {},
        packageCache: {},
        plugin: ["watchify"]
    })

    b.on("update", makeBundle)

    function makeBundle() {
        b.transform("babelify", {
            presets: ["es2015", "react"]
        })
            .bundle()
            .on("error", (err) => {
                console.error(err.message)
                console.error(err.codeFrame)
            })
            .pipe(source("bundle.js"))
            .pipe(gulp.dest("static/"))
        console.log("Bundle updated, success")
    }

    // we have to call bundle once to kick it off.
    makeBundle()
    return b
})

gulp.task("default", ["watch"])