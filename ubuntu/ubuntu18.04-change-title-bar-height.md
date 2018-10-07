在`~/.config/gtk-3.0/gtk.css`文件中添加以下内容（文件不存在则创建）：
```css
/* shrink headerbars (don't forget semicolons after each property) */
headerbar {
    min-height: 0px;
    padding-left: 2px; /* same as childrens vertical margins for nicer proportions */
    padding-right: 2px;
    background-color: #2d2d2d;
}

headerbar entry,
headerbar spinbutton,
headerbar button,
headerbar separator {
    margin-top: 0px; /* same as headerbar side padding for nicer proportions */
    margin-bottom: 0px;
}

/* shrink ssd titlebars */
.default-decoration {
    min-height: 0; /* let the entry and button drive the titlebar size */
    padding: 0px;
    background-color: #2d2d2d;
}

.default-decoration .titlebutton {
    min-height: 0px; /* tweak these two props to reduce button size */
    min-width: 0px;
}

window.ssd headerbar.titlebar {
    padding-top: 3px;
    padding-bottom: 3px;
	padding-right:8px;
    min-height: 0;
}

window.ssd headerbar.titlebar button.titlebutton {
    padding-top: 3px;
    padding-bottom:3px;
	padding-right:4px;
	padding-left:4px;
    min-height: 0;
}
```
按下快捷键`Alt + F2`，然后输入`r`，回车查看效果。
