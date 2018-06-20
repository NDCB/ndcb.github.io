f16::
saved := clipboardall ; save clipboard contents
Send, ^x ; cut
SendRaw, \\[\begin{align*}
Send, {Enter}
Send, ^v
Send, {Enter}
SendRaw, \end{align*}\\] 
clipboard := saved ; restore clipboard
saved := "" ; clear saved
Return