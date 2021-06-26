# TheCaptainsLog


Action	|　URL	|　HTTP Verb	|　JSX view filename	|　　mongoose method|　
----|----|----|----|----|----|
1	Index	|　　/logs/　|　 GET | Index.jsx	|Log.find()
2	Show | /logs/:id | GET | Show.jsx | Log.findById()
3	New	| /logs/new | GET | New.jsx | none
4	Create | /logs/	| POST | none| Log.create(req.body)
5	Edit | /logs/:id/edit | GET | Edit.jsx | Log.findById(req.params.id)
6	Update | /logs/:id | PUT | Show.jsx | Log.findByIdAndUpdate(req.params.id)
7	Destroy | /logs/:id | DELETE | none | Log.findByIdAndDelete(req.params.id)
