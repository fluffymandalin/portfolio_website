(()=>{
    "use strict";
    const e = e=>{
        if (!e)
            return !1;
        const t = ["checkbox", "radio"];
        return !(!("type"in e) || !t.includes(e.type)) || t.includes(e.role)
    }
    ;
    function t(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    const n = e=>{
        window.postMessage(function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var o = null != arguments[n] ? arguments[n] : {}
                  , l = Object.keys(o);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(o).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable
                }
                )))),
                l.forEach((function(n) {
                    t(e, n, o[n])
                }
                ))
            }
            return e
        }({
            action: "__simplify__updateFilledInput"
        }, e), "*")
    }
      , o = {
        react: ({keyPath: t, containerPath: o, inputPath: l, inputIndex: u, value: r, eventOptions: i})=>{
            try {
                var a, c;
                const d = null === (a = document.evaluate(o, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === a ? void 0 : a.snapshotItem(0)
                  , s = null === (c = document.evaluate(l, d || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === c ? void 0 : c.snapshotItem(u);
                if (!s)
                    throw new Error("Input not found.");
                const h = Object.keys(s).find((e=>/^__reactProps/.test(e)));
                if (!h)
                    throw new Error("No React event handlers!");
                const p = (e,t,n)=>{
                    try {
                        var o;
                        const l = new e(t,i);
                        Object.defineProperty(l, "target", {
                            writable: !1,
                            value: s
                        }),
                        Object.defineProperty(l, "currentTarget", {
                            writable: !1,
                            value: s
                        }),
                        s.dispatchEvent(l),
                        (null === (o = s[h]) || void 0 === o ? void 0 : o[n]) && (l.nativeEvent = l,
                        s[h][n](l))
                    } catch (e) {}
                }
                ;
                if (s instanceof HTMLSelectElement)
                    return p(FocusEvent, "focus", "onFocus"),
                    p(MouseEvent, "click", "onClick"),
                    s.value = r,
                    p(InputEvent, "input", "onInput"),
                    p(Event, "change", "onChange"),
                    p(FocusEvent, "blur", "onBlur"),
                    void n({
                        keyPath: t,
                        filled: !0
                    });
                if (s instanceof HTMLButtonElement || ["button"].includes(s.role))
                    return p(FocusEvent, "focus", "onFocus"),
                    p(MouseEvent, "mousedown", "onMouseDown"),
                    p(MouseEvent, "mouseup", "onMouseUp"),
                    p(MouseEvent, "click", "onClick"),
                    p(FocusEvent, "blur", "onBlur"),
                    void n({
                        keyPath: t,
                        filled: !0
                    });
                if (e(s)) {
                    if (void 0 === r && (r = !0),
                    !(s instanceof HTMLInputElement)) {
                        if (e(s))
                            return r && (p(FocusEvent, "focus", "onFocus"),
                            p(MouseEvent, "click", "onClick"),
                            p(Event, "change", "onChange"),
                            p(FocusEvent, "blur", "onBlur")),
                            void n({
                                keyPath: t,
                                filled: !0
                            });
                        throw new Error("Input is not an HTMLInputElement!")
                    }
                    return !r && !s.checked || r && s.checked || (p(FocusEvent, "focus", "onFocus"),
                    p(MouseEvent, "click", "onClick"),
                    s.checked = Boolean(r),
                    p(InputEvent, "input", "onInput"),
                    p(Event, "change", "onChange"),
                    p(FocusEvent, "blur", "onBlur")),
                    void n({
                        keyPath: t,
                        filled: !0
                    })
                }
                if (s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement)
                    return p(FocusEvent, "focus", "onFocus"),
                    p(MouseEvent, "click", "onClick"),
                    p(KeyboardEvent, "keydown", "onKeyDown"),
                    p(KeyboardEvent, "keypress", "onKeyPress"),
                    s.value = r,
                    s.setAttribute("value", r),
                    p(InputEvent, "input", "onInput"),
                    p(KeyboardEvent, "keyup", "onKeyUp"),
                    p(Event, "change", "onChange"),
                    p(FocusEvent, "blur", "onBlur"),
                    void n({
                        keyPath: t,
                        filled: !0
                    });
                throw new Error("Unknown input type!")
            } catch (e) {
                n({
                    keyPath: t,
                    error: (null == e ? void 0 : e.message) || (null == e ? void 0 : e.toString()) || "Unknown error"
                })
            }
        }
        ,
        reactClick: ({keyPath: e, containerPath: t, inputPath: o, inputIndex: l, eventOptions: u})=>{
            try {
                var r, i;
                const a = null === (r = document.evaluate(t, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === r ? void 0 : r.snapshotItem(0)
                  , c = null === (i = document.evaluate(o, a || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === i ? void 0 : i.snapshotItem(l);
                if (!c)
                    throw new Error("Input not found.");
                try {
                    const e = Object.keys(c).find((e=>/^__reactProps/.test(e)));
                    if (!e)
                        throw new Error("React props key not found!");
                    if (!c[e].onClick)
                        throw new Error("Click handler not found!");
                    const t = new MouseEvent("click",u);
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: c
                    }),
                    Object.defineProperty(t, "currentTarget", {
                        writable: !1,
                        value: c
                    }),
                    c[e].onClick(t)
                } catch (e) {}
                n({
                    keyPath: e,
                    filled: !0
                })
            } catch (t) {
                n({
                    keyPath: e,
                    error: (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error"
                })
            }
        }
        ,
        tptEnableResume: ({keyPath: e})=>{
            try {
                if (!window.tpt)
                    throw new Error("No tpt!");
                window.tpt.uploadResume.updateAcceptedFieldMode("file"),
                window.tpt.uploadResume.uploadResumeInputShower("file"),
                window.tpt.uploadResume.showUploadFileError(!1),
                window.tpt.uploadResume.checkFilledResumeFile() ? window.tpt.uploadResume.toggleUploadResumeNextButton(!0) : window.tpt.uploadResume.toggleUploadResumeNextButton(!1),
                n({
                    keyPath: e,
                    filled: !0
                })
            } catch (t) {
                n({
                    keyPath: e,
                    error: (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error"
                })
            }
        }
        ,
        jQuery: ({keyPath: t, containerPath: o, inputPath: l, inputIndex: u, value: r, event: i, eventOptions: a})=>{
            try {
                var c, d;
                if (!window.jQuery)
                    throw new Error("No jQuery!");
                const s = null === (c = document.evaluate(o, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === c ? void 0 : c.snapshotItem(0)
                  , h = null === (d = document.evaluate(l, s || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === d ? void 0 : d.snapshotItem(u);
                if (!h)
                    throw new Error("Input not found.");
                try {
                    if (i)
                        window.jQuery(h).trigger(i, a);
                    else if (h instanceof HTMLSelectElement) {
                        if (void 0 === r)
                            throw new Error("Value is undefined!");
                        window.jQuery(h).trigger("focus").trigger("click").val(r).trigger("input").trigger("change")
                    } else if (e(h))
                        window.jQuery(h).trigger("focus").trigger("click").prop("checked", Boolean(r)).trigger("input").trigger("change");
                    else {
                        if (void 0 === r)
                            throw new Error("Value is undefined!");
                        window.jQuery(h).trigger("focus").trigger("click").trigger("keydown").trigger("keypress").val(r).trigger("input").trigger("keyup").trigger("change")
                    }
                } catch (e) {
                    if (!i && window.jQuery(h).val() !== r)
                        throw new Error("Failed to set value!")
                }
                n({
                    keyPath: t,
                    filled: !0
                })
            } catch (e) {
                n({
                    keyPath: t,
                    error: (null == e ? void 0 : e.message) || (null == e ? void 0 : e.toString()) || "Unknown error"
                })
            }
        }
        ,
        dijit: ({keyPath: e, containerPath: t, inputPath: o, inputIndex: l, value: u})=>{
            try {
                var r, i;
                if (!window.dijit)
                    throw new Error("No dijit!");
                const a = null === (r = document.evaluate(t, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === r ? void 0 : r.snapshotItem(0)
                  , c = null === (i = document.evaluate(o, a || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === i ? void 0 : i.snapshotItem(l);
                if (!c)
                    throw new Error("Input not found.");
                if (void 0 === u)
                    throw new Error("Value is undefined!");
                const d = [].concat(u);
                let s = !1;
                try {
                    for (let e = 0; e < d.length; e += 1)
                        if (window.dijit.getEnclosingWidget(c).set("value", d[e]),
                        window.dijit.getEnclosingWidget(c).get("value") === d[e]) {
                            s = !0;
                            break
                        }
                    if (!s)
                        throw new Error("Unable to confirm value was set!")
                } catch (e) {}
                n({
                    keyPath: e,
                    filled: !0
                })
            } catch (t) {
                n({
                    keyPath: e,
                    error: (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error"
                })
            }
        }
        ,
        tinyMCE: ({keyPath: e, containerPath: t, inputPath: o, inputIndex: l, value: u})=>{
            try {
                var r, i;
                if (!window.tinyMCE)
                    throw new Error("No tinyMCE!");
                const a = null === (r = document.evaluate(t, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === r ? void 0 : r.snapshotItem(0)
                  , c = null === (i = document.evaluate(o, a || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === i ? void 0 : i.snapshotItem(l);
                if (!c)
                    throw new Error("Input not found.");
                if (void 0 === u)
                    throw new Error("Value is undefined!");
                const d = [].concat(u);
                let s = !1;
                try {
                    for (let e = 0; e < d.length; e += 1)
                        if (window.tinyMCE.get(c.id).setContent(d[e]),
                        window.tinyMCE.get(c.id).getContent() === d[e]) {
                            s = !0;
                            break
                        }
                    if (!s)
                        throw new Error("Unable to confirm value was set!")
                } catch (e) {}
                n({
                    keyPath: e,
                    filled: !0
                })
            } catch (t) {
                n({
                    keyPath: e,
                    error: (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "Unknown error"
                })
            }
        }
    };
    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    window.addEventListener("message", (e=>{
        var t;
        e.source === window && "__simplify__fillInput" === (null === (t = e.data) || void 0 === t ? void 0 : t.action) && o[e.data.method] && o[e.data.method](e.data)
    }
    ), !1);
    const u = e=>{
        window.postMessage(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                o.forEach((function(t) {
                    l(e, t, n[t])
                }
                ))
            }
            return e
        }({
            action: "__simplify__updateTrackedInput"
        }, e), "*")
    }
      , r = e=>[].concat(e || ["./parent::*//text()", "./parent::*/parent::*//text()", "./parent::*/parent::*/parent::*//text()", './/ancestor::*[string-length(normalize-space(translate(text(), "Â ", " "))) > 0]//text()'])
      , i = ({field: e, inputPath: t, inputValuePath: n, inputValuePathArray: o=r(n)})=>{
        const l = []
          , u = document.evaluate(t, e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (let e = 0; e < u.snapshotLength; e += 1) {
            const t = u.snapshotItem(e);
            if (null == t ? void 0 : t.checked) {
                let e = t.value || "";
                for (let n = 0; n < o.length; n += 1) {
                    const l = document.evaluate(o[n], t, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                    for (let t = 0; t < l.snapshotLength; t += 1) {
                        var i, a;
                        if (e = null === (a = l.snapshotItem(t)) || void 0 === a || null === (i = a.nodeValue) || void 0 === i ? void 0 : i.trim(),
                        e)
                            break
                    }
                    if (e)
                        break
                }
                e && l.push(e)
            }
        }
        return l
    }
      , a = ({field: e, inputPath: t, inputValuePath: n, inputValuePathArray: o=r(n)})=>{
        const l = []
          , u = document.evaluate(t, e, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (let e = 0; e < u.snapshotLength; e += 1) {
            const t = u.snapshotItem(e);
            let n = "";
            for (let e = 0; e < o.length; e += 1) {
                const l = document.evaluate(o[e], t, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                for (let e = 0; e < l.snapshotLength; e += 1) {
                    var i, a;
                    if (n = null === (a = l.snapshotItem(e)) || void 0 === a || null === (i = a.nodeValue) || void 0 === i ? void 0 : i.trim(),
                    n)
                        break
                }
                if (n)
                    break
            }
            n && l.push(n)
        }
        return l
    }
      , c = {
        jQuery: ({suid: t, containerPath: n, fieldPath: o, fieldIndex: l, labelPath: r, inputPath: c, inputValuePath: d})=>{
            try {
                if (!window.jQuery)
                    throw new Error("No jQuery!");
                const {field: s, input: h} = (({containerPath: e, fieldPath: t, fieldIndex: n, labelPath: o, inputPath: l})=>{
                    var u, r, i, a;
                    const c = null === (u = document.evaluate(e, document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === u ? void 0 : u.snapshotItem(0)
                      , d = null === (r = document.evaluate(t, c || document.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === r ? void 0 : r.snapshotItem(n);
                    if (!d)
                        throw new Error("Field not found.");
                    const s = null === (i = document.evaluate(o, d, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === i ? void 0 : i.snapshotItem(0);
                    if (!s)
                        throw new Error("Label not found.");
                    const h = null === (a = document.evaluate(l, d, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)) || void 0 === a ? void 0 : a.snapshotItem(0);
                    if (!h)
                        throw new Error("Input not found.");
                    return {
                        container: c,
                        field: d,
                        label: s,
                        input: h
                    }
                }
                )({
                    containerPath: n,
                    fieldPath: o,
                    fieldIndex: l,
                    labelPath: r,
                    inputPath: c
                });
                if (h instanceof HTMLSelectElement) {
                    const e = ()=>window.jQuery(h).find([].concat(d || "option:selected").join(", ")).text().trim() || window.jQuery(h).val();
                    window.jQuery(h).off("change.__simplify__trackInput"),
                    window.jQuery(h).on("change.__simplify__trackInput", (()=>{
                        u({
                            suid: t,
                            inputValue: e()
                        })
                    }
                    ))
                } else if (e(h)) {
                    const e = document.evaluate(c, s, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                    for (let n = 0; n < e.snapshotLength; n += 1) {
                        const o = e.snapshotItem(n);
                        window.jQuery(o).off("change.__simplify__trackInput"),
                        window.jQuery(o).on("change.__simplify__trackInput", (()=>{
                            u({
                                suid: t,
                                inputValue: i({
                                    field: s,
                                    inputPath: c,
                                    inputValuePath: d
                                }),
                                options: a({
                                    field: s,
                                    inputPath: c,
                                    inputValuePath: d
                                })
                            })
                        }
                        ))
                    }
                } else {
                    const e = ()=>d && window.jQuery(s).find([].concat(d).join(", ")).text().trim() || window.jQuery(h).val();
                    window.jQuery(h).off("change.__simplify__trackInput"),
                    window.jQuery(h).on("change.__simplify__trackInput", (()=>{
                        u({
                            suid: t,
                            inputValue: e()
                        })
                    }
                    ))
                }
            } catch (e) {
                u({
                    suid: t,
                    status: "error",
                    error: (null == e ? void 0 : e.message) || (null == e ? void 0 : e.toString()) || "Unknown error"
                })
            }
        }
    };
    window.addEventListener("message", (e=>{
        var t;
        e.source === window && "__simplify__trackInput" === (null === (t = e.data) || void 0 === t ? void 0 : t.action) && c[e.data.method] && c[e.data.method](e.data)
    }
    ), !1)
}
)();
