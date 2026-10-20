/* Nội dung biên soạn theo ảnh bảng và bài giảng TN091, chương 2. */
const R = String.raw;
const Q = (title, prompt, steps, source='Bài tập biên soạn') => ({title,prompt,steps,source});
const L = (id,chapter,title,short,description,source,formulas,method,example,pitfall,exercises) => ({id,chapter,title,short,description,source,formulas,method,example,pitfall,exercises});
export const lessons = [
L('bien-co',1,'Phép thử & biến cố','Ngôn ngữ xác suất','Đọc đúng một biến cố trước khi bắt đầu tính.','Ảnh bảng · Chương 1 (phần bổ sung theo đề cương)',[
R`$\Omega$: không gian mẫu; $A\subseteq\Omega$: biến cố. $\overline A=\Omega\setminus A$.`,
R`$A\cup B$: ít nhất một xảy ra; $A\cap B$: cả hai xảy ra.`,
R`$A\setminus B=A\cap\overline B$; $\overline{A\cup B}=\overline A\cap\overline B$; $\overline{A\cap B}=\overline A\cup\overline B$.`
],['Mô tả phép thử và liệt kê kết quả sơ cấp.','Đặt tên các biến cố, chuyển câu chữ thành phép toán tập hợp.','Kiểm tra bằng cách liệt kê hoặc tô miền Venn.'],Q('Hai cảm biến',R`$A$: cảm biến 1 báo lỗi; $B$: cảm biến 2 báo lỗi. Viết biến cố “đúng một cảm biến báo lỗi”.`,[R`“Đúng một” gồm hai khả năng loại trừ nhau: $A$ xảy ra và $B$ không xảy ra, hoặc ngược lại.`,R`Vậy $C=(A\cap\overline B)\cup(\overline A\cap B)$. Trên Venn, tô hai phần riêng của hai hình tròn, bỏ phần giao.`]),'“Ít nhất một” có cả trường hợp cả hai; “đúng một” thì không.',[
Q('Một lần tung',R`Tung một xúc xắc sáu mặt. Viết $\Omega$, biến cố $A$: số chẵn, $B$: lớn hơn 4; tìm $A\cap B$.`,[R`$\Omega=\{1,2,3,4,5,6\}$; $A=\{2,4,6\}$; $B=\{5,6\}$.`,R`Phần chung là $A\cap B=\{6\}$.`]),
Q('Hai đồng xu','Tung hai đồng xu, S là sấp và N là ngửa. Viết biến cố đúng một mặt ngửa.',[R`Phân biệt thứ tự hai lần: $\Omega=\{SS,SN,NS,NN\}$.`,R`Đúng một N: $A=\{SN,NS\}$.`]),
Q('Hệ thống dự phòng',R`$A,B$ lần lượt là biến cố máy 1, máy 2 hoạt động. Hệ thống hoạt động khi có ít nhất một máy hoạt động. Viết biến cố hệ thống hỏng.`,[R`Hệ thống hoạt động là $A\cup B$.`,R`Hỏng là $\overline{A\cup B}=\overline A\cap\overline B$: cả hai máy cùng hỏng.`]),
Q('Qua hai môn',R`$A$: qua Toán; $B$: qua Tin. Viết “qua Toán nhưng trượt Tin”.`,[R`“Trượt Tin” là $\overline B$.`,R`Cần đồng thời hai điều kiện: $A\cap\overline B=A\setminus B$.`]),
Q('Không quá một lỗi',R`$A,B$ là lỗi ở hai linh kiện. Viết biến cố có không quá một linh kiện lỗi.`,[R`Các khả năng hợp lệ: không lỗi hoặc đúng một lỗi. Chỉ loại trường hợp cả hai lỗi.`,R`Biến cố là $\overline{A\cap B}=\overline A\cup\overline B$.`]),
Q('Ba lần kiểm tra',R`$A_i$: lần kiểm tra $i$ đạt. Viết biến cố đúng hai trong ba lần đạt.`,[R`Tách theo lần không đạt: $(A_1A_2\overline A_3)\cup(A_1\overline A_2A_3)\cup(\overline A_1A_2A_3)$.`,R`Ở đây viết liền là giao; ba nhánh xung khắc vì vị trí lần không đạt khác nhau.`]),
Q('Xung khắc?',R`Xúc xắc: $A=\{1,3,5\}$, $B=\{2,4,6\}$. Hai biến cố có xung khắc không?`,[R`$A\cap B=\varnothing$ nên xung khắc.`,R`Ngoài ra $A\cup B=\Omega$ nên chúng còn là hai biến cố đối nhau.`]),
Q('Bao hàm',R`Chọn ngẫu nhiên một sinh viên. $A$: điểm trên 8; $B$: điểm trên 5. Rút gọn $A\cap B$ và $A\cup B$.`,[R`Điểm trên 8 thì chắc chắn trên 5, tức $A\subseteq B$.`,R`Vậy $A\cap B=A$ và $A\cup B=B$.`]),
Q('Miền Venn',R`Với hai biến cố $A,B$, mô tả miền $\overline A\cap B$ và $\overline{A\cup B}$.`,[R`$\overline A\cap B$: phần nằm trong hình tròn B nhưng ngoài hình tròn A.`,R`$\overline{A\cup B}$: phần ngoài cả hai hình tròn, nhưng vẫn trong hình chữ nhật $\Omega$.`]),
Q('Số thứ tự có ý nghĩa','Bốc lần lượt hai thẻ khác nhau từ các thẻ 1,2,3, không hoàn lại. Liệt kê không gian mẫu.',[R`Vì bốc lần lượt, dùng cặp có thứ tự $(i,j)$ với $i\ne j$.`,R`$\Omega=\{(1,2),(1,3),(2,1),(2,3),(3,1),(3,2)\}$. Có 6 kết quả.`])
]),
L('co-dien',1,'Xác suất theo định nghĩa','Đếm đúng không gian mẫu','Chọn có thứ tự hay không, có hoàn lại hay không?','Ảnh bảng · Chương 1 (phần bổ sung theo đề cương)',[
R`Nếu các kết quả hữu hạn và đồng khả năng: $P(A)=\dfrac{|A|}{|\Omega|}$.`,
R`$n!=1\cdot2\cdots n$; $A_n^r=\dfrac{n!}{(n-r)!}$; $C_n^r=\binom nr=\dfrac{n!}{r!(n-r)!}$.`,
R`Có thứ tự, được lặp: $n^r$. Không thứ tự, không lặp: $\binom nr$.`
],['Xác định quy tắc lấy mẫu.','Đếm toàn bộ và thuận lợi theo cùng một quy tắc.','Lấy tỉ số; kiểm tra kết quả thuộc [0,1].'],Q('Kiểm tra linh kiện','Hộp có 4 linh kiện lỗi và 6 tốt. Lấy đồng thời 2 linh kiện. Tính xác suất đúng 1 lỗi.',[R`Lấy đồng thời nên không xét thứ tự: $|\Omega|=\binom{10}2=45$.`,R`Đúng 1 lỗi: chọn 1 trong 4 lỗi và 1 trong 6 tốt, có $\binom41\binom61=24$ cách.`,R`$P=24/45=8/15$. Không dùng mẫu có thứ tự ở tử rồi mẫu không thứ tự ở mẫu.`]),'Công thức đếm cổ điển cần các kết quả sơ cấp đồng khả năng.',[
Q('Tổng hai xúc xắc','Tung hai xúc xắc cân đối, độc lập. Tính xác suất tổng bằng 9.',[R`Có $6^2=36$ cặp có thứ tự đồng khả năng.`,R`Thuận lợi: $(3,6),(4,5),(5,4),(6,3)$. Vậy $P=4/36=1/9$.`]),
Q('Chọn ban đại diện','Lớp có 7 nữ, 5 nam. Chọn ngẫu nhiên 3 người. Tính xác suất đúng 2 nữ.',[R`Có $\binom{12}3=220$ nhóm. Nhóm đúng 2 nữ có $\binom72\binom51=105$ cách.`,R`$P=105/220=21/44$.`]),
Q('Hai sản phẩm tốt','Hộp 8 sản phẩm gồm 3 lỗi. Lấy 2 không hoàn lại. Tính xác suất cả hai tốt.',[R`Có 5 sản phẩm tốt. Đếm nhóm: $P=\binom52/\binom82$.`,R`$P=10/28=5/14$.`]),
Q('Mã truy cập','Mã gồm 4 chữ số 0–9, cho phép lặp và bắt đầu bằng 0. Chọn đều một mã. Xác suất bốn chữ số khác nhau?',[R`Toàn bộ có $10^4$ mã. Khác nhau có $10\cdot9\cdot8\cdot7=5040$ mã.`,R`$P=5040/10000=0{,}504$.`]),
Q('Ít nhất một át','Rút đồng thời 2 lá từ bộ 52 lá, trong đó 4 lá át. Tính xác suất ít nhất một át.',[R`Dùng đối: không có át có $\binom{48}2$ cách.`,R`$P=1-\binom{48}2/\binom{52}2=33/221$.`]),
Q('Hai màu','Hộp 4 bi đỏ và 3 bi xanh. Lấy 2 bi không hoàn lại. Tính xác suất hai bi khác màu.',[R`Chọn 1 đỏ và 1 xanh: $4\cdot3=12$ cách.`,R`Toàn bộ $\binom72=21$ cách; $P=12/21=4/7$.`]),
Q('Xếp chỗ','Xếp ngẫu nhiên 5 bạn vào một hàng. Tính xác suất An và Bình đứng cạnh nhau.',[R`Tổng cộng $5!$ cách. Gộp An–Bình thành một khối: có $4!$ cách xếp khối với 3 người còn lại.`,R`Khối có 2 thứ tự bên trong, nên $P=2\cdot4!/5!=2/5$.`]),
Q('Chọn có hoàn lại','Hộp có 3 bi đỏ, 2 bi xanh. Lấy 2 lần, mỗi lần hoàn lại. Tính xác suất hai lần đều đỏ.',[R`Có $5^2=25$ cặp bi đồng khả năng vì hoàn lại.`,R`Có $3^2=9$ cặp đỏ. $P=9/25$.`]),
Q('Đội có đủ hai nhóm','Có 6 sinh viên nhóm A, 4 nhóm B. Chọn 3 người. Tính xác suất có cả hai nhóm.',[R`Loại hai trường hợp: cả 3 thuộc A hoặc cả 3 thuộc B.`,R`$P=1-[\binom63+\binom43]/\binom{10}3=1-24/120=4/5$.`]),
Q('Vị trí thuyết trình','Có 8 nhóm được xếp ngẫu nhiên vào 8 vị trí. Xác suất nhóm A ở vị trí 1 và nhóm B ở vị trí 8?',[R`Có $8!$ thứ tự. Cố định A và B, còn $6!$ thứ tự.`,R`$P=6!/8!=1/56$.`])
]),
L('cong-nhan',1,'Cộng, nhân & có điều kiện','Chọn đúng công thức','Phân biệt xung khắc với độc lập, và lấy mẫu có điều kiện.','Ảnh bảng · Chương 1 (phần bổ sung theo đề cương)',[
R`$P(A\cup B)=P(A)+P(B)-P(A\cap B)$. Nếu xung khắc thì $P(A\cap B)=0$.`,
R`$P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$, với $P(B)>0$; $P(A\cap B)=P(A)P(B\mid A)$.`,
R`Nếu $A,B$ độc lập: $P(A\cap B)=P(A)P(B)$; $P(\overline A)=1-P(A)$.`
],['Tìm từ khóa: hoặc, và, biết rằng.','Xem có độc lập hay không; không tự giả định.','Viết công thức ký hiệu rồi mới thay số.'],Q('Hai kênh đặt hàng',R`$P(A)=0{,}6$, $P(B)=0{,}5$, $P(A\cap B)=0{,}3$. Tính xác suất dùng ít nhất một kênh và dùng A biết đã dùng B.`,[R`“Ít nhất một” là hợp: $P(A\cup B)=0{,}6+0{,}5-0{,}3=0{,}8$.`,R`$P(A\mid B)=0{,}3/0{,}5=0{,}6$.`,R`Vì $0{,}3=0{,}6\cdot0{,}5$ nên ở đây A và B độc lập.`]),'Hai biến cố xung khắc có xác suất dương không thể độc lập.',[
Q('Hai môn học',R`$P(A)=0{,}7$, $P(B)=0{,}6$, $P(AB)=0{,}45$. Tính $P(A\cup B)$ và $P(A\mid B)$.`,[R`$P(A\cup B)=0{,}7+0{,}6-0{,}45=0{,}85$.`,R`$P(A\mid B)=0{,}45/0{,}6=0{,}75$.`]),
Q('Hai máy độc lập','Hai máy hỏng độc lập với xác suất 0,1 và 0,2. Tính xác suất ít nhất một hỏng.',[R`Không máy nào hỏng có xác suất $0{,}9\cdot0{,}8=0{,}72$.`,R`Ít nhất một hỏng có xác suất $1-0{,}72=0{,}28$.`]),
Q('Rút không hoàn lại','Hộp 5 bi đỏ, 3 xanh. Rút 2 bi liên tiếp không hoàn lại. Tính xác suất cả hai đỏ.',[R`Lần đầu đỏ: $5/8$. Khi đã lấy đỏ, còn 4 đỏ trên 7 bi.`,R`$P(R_1R_2)=P(R_1)P(R_2\mid R_1)=(5/8)(4/7)=5/14$.`]),
Q('Đúng một lần trúng','Hai người bắn độc lập, xác suất trúng 0,8 và 0,7. Tính xác suất đúng một người trúng.',[R`Hai nhánh xung khắc: người 1 trúng, 2 trượt; hoặc 1 trượt, 2 trúng.`,R`$P=0{,}8\cdot0{,}3+0{,}2\cdot0{,}7=0{,}38$.`]),
Q('Biến cố xung khắc',R`$A,B$ xung khắc, $P(A)=0{,}25$, $P(B)=0{,}4$. Tính $P(A\cup B)$ và kiểm tra độc lập.`,[R`$P(AB)=0$ nên $P(A\cup B)=0{,}65$.`,R`$P(A)P(B)=0{,}1\ne0$ nên không độc lập.`]),
Q('Tìm phần giao',R`$P(A)=0{,}55$, $P(B)=0{,}5$, $P(A\cup B)=0{,}8$. Tính xác suất chỉ A xảy ra.`,[R`$P(AB)=0{,}55+0{,}5-0{,}8=0{,}25$.`,R`$P(A\setminus B)=P(A)-P(AB)=0{,}3$.`]),
Q('Ba linh kiện nối tiếp','Ba linh kiện hoạt động độc lập với xác suất 0,9; 0,8; 0,95. Hệ nối tiếp hoạt động khi cả ba hoạt động. Tính độ tin cậy.',[R`Sự kiện hệ hoạt động là giao của ba sự kiện hoạt động.`,R`Do độc lập đồng thời, $P=0{,}9\cdot0{,}8\cdot0{,}95=0{,}684$.`]),
Q('Biết ít nhất một ngửa','Tung 2 đồng xu cân đối độc lập. Biết có ít nhất một mặt ngửa, xác suất cả hai ngửa là bao nhiêu?',[R`Trong không gian điều kiện có 3 kết quả đồng khả năng: NN, NS, SN.`,R`$P(NN\mid\text{ít nhất một N})=(1/4)/(3/4)=1/3$.`]),
Q('Thông tin cuộc khảo sát','60% sinh viên dùng xe buýt; trong số này 30% đi học sớm. Tính xác suất một sinh viên vừa dùng xe buýt vừa đi sớm.',[R`Đặt B: dùng xe buýt, S: đi sớm. Đã cho $P(B)=0{,}6$ và $P(S\mid B)=0{,}3$.`,R`$P(BS)=0{,}6\cdot0{,}3=0{,}18$.`]),
Q('Kiểm tra dữ liệu',R`Có thể có $P(A)=0{,}8$, $P(B)=0{,}7$, $P(AB)=0{,}2$ không?`,[R`Nếu vậy $P(A\cup B)=0{,}8+0{,}7-0{,}2=1{,}3>1$.`,R`Dữ liệu không hợp lệ. Cần $P(AB)\ge P(A)+P(B)-1=0{,}5$.`])
]),
L('bayes',1,'Toàn phần & Bayes','Đi từ nguyên nhân đến kết quả','Dùng sơ đồ cây để phân biệt xác suất thuận và xác suất ngược.','Ảnh bảng · Chương 1 (phần bổ sung theo đề cương)',[
R`$H_1,\ldots,H_m$ tạo thành hệ đầy đủ: đôi một xung khắc và $\bigcup H_i=\Omega$.`,
R`$P(A)=\sum_i P(H_i)P(A\mid H_i)$.`,
R`$P(H_j\mid A)=\dfrac{P(H_j)P(A\mid H_j)}{\sum_i P(H_i)P(A\mid H_i)}$, khi $P(A)>0$.`
],['Vẽ nhánh đầu theo nguồn H; nhánh sau theo kết quả A.','Nhân dọc từng nhánh, cộng các nhánh dẫn đến A.','Bayes: lấy nhánh cần truy nguồn chia tổng xác suất A.'],Q('Truy nguồn sản phẩm lỗi','Dây chuyền A làm 60% sản phẩm, lỗi 2%; B làm 40%, lỗi 5%. Chọn một sản phẩm thấy lỗi. Xác suất từ B?',[R`Nhánh A–lỗi: $0{,}6\cdot0{,}02=0{,}012$; B–lỗi: $0{,}4\cdot0{,}05=0{,}02$.`,R`Xác suất lỗi toàn nhà máy: $P(D)=0{,}032$.`,R`$P(B\mid D)=0{,}02/0{,}032=5/8=0{,}625$. Tỷ lệ 5% là $P(D\mid B)$, không phải kết quả cần tìm.`]),'Đảo điều kiện không giữ nguyên xác suất: P(A|B) thường khác P(B|A).',[
Q('Hai xưởng','Xưởng A cung cấp 70%, lỗi 1%; B cung cấp 30%, lỗi 4%. Tính tỷ lệ lỗi chung và xác suất sản phẩm lỗi từ B.',[R`$P(D)=0{,}7\cdot0{,}01+0{,}3\cdot0{,}04=0{,}019$.`,R`$P(B\mid D)=0{,}012/0{,}019=12/19$.`]),
Q('Bộ lọc thư','20% thư là rác. Bộ lọc đánh dấu 90% thư rác và 5% thư thường. Một thư bị đánh dấu; xác suất là rác?',[R`$P(M)=0{,}2\cdot0{,}9+0{,}8\cdot0{,}05=0{,}22$.`,R`$P(R\mid M)=0{,}18/0{,}22=9/11$.`]),
Q('Chọn hộp','Chọn đều một trong hai hộp. Hộp I có 3 đỏ, 2 xanh; hộp II có 1 đỏ, 4 xanh. Lấy 1 bi được đỏ. Xác suất đã chọn hộp I?',[R`$P(R)=\tfrac12\tfrac35+\tfrac12\tfrac15=2/5$.`,R`$P(I\mid R)=(3/10)/(2/5)=3/4$.`]),
Q('Ba máy','Ba máy cung cấp 20%, 30%, 50%; tỷ lệ lỗi là 1%, 2%, 3%. Tính xác suất sản phẩm tốt.',[R`Xác suất lỗi $P(D)=0{,}2\cdot0{,}01+0{,}3\cdot0{,}02+0{,}5\cdot0{,}03=0{,}023$.`,R`$P(\overline D)=1-0{,}023=0{,}977$.`]),
Q('Trời mưa và giao hàng','Xác suất mưa 0,3. Nếu mưa, giao trễ 0,4; nếu không mưa, giao trễ 0,1. Biết giao trễ, xác suất trời mưa?',[R`$P(T)=0{,}3\cdot0{,}4+0{,}7\cdot0{,}1=0{,}19$.`,R`$P(M\mid T)=0{,}12/0{,}19=12/19$.`]),
Q('Nguồn hàng tốt','A cung cấp 60%, tỷ lệ tốt 95%; B cung cấp 40%, tốt 90%. Sản phẩm được chọn là tốt. Xác suất đến từ A?',[R`$P(G)=0{,}6\cdot0{,}95+0{,}4\cdot0{,}9=0{,}93$.`,R`$P(A\mid G)=0{,}57/0{,}93=19/31$.`]),
Q('Hai ca làm','Ca ngày làm 75% đơn hàng, sai 2%; ca đêm làm 25%, sai 6%. Biết đơn sai, tính xác suất thuộc ca đêm.',[R`$P(S)=0{,}75\cdot0{,}02+0{,}25\cdot0{,}06=0{,}03$.`,R`$P(Đ\mid S)=0{,}015/0{,}03=1/2$.`]),
Q('Kiểm tra tự động','10% linh kiện lỗi. Máy báo lỗi đúng 95% linh kiện lỗi, và báo nhầm 10% linh kiện tốt. Biết máy không báo lỗi, xác suất linh kiện vẫn lỗi?',[R`$P(\overline M)=0{,}1\cdot0{,}05+0{,}9\cdot0{,}9=0{,}815$.`,R`$P(D\mid\overline M)=0{,}005/0{,}815=1/163$.`]),
Q('Tìm tỷ trọng','A có tỷ lệ lỗi 1%, B có tỷ lệ lỗi 5%. Tỷ lệ lỗi chung 2,6%. Tìm tỷ trọng sản phẩm của A.',[R`Đặt $p=P(A)$ thì $P(B)=1-p$. Toàn phần: $0{,}01p+0{,}05(1-p)=0{,}026$.`,R`$0{,}04p=0{,}024$ nên $p=0{,}6$: A cung cấp 60%.`]),
Q('Truy nguồn ba nhà cung cấp','Ba nguồn có tỷ trọng 0,2; 0,3; 0,5, tỷ lệ lỗi 0,1; 0,2; 0,04. Sản phẩm lỗi đến từ nguồn thứ ba với xác suất bao nhiêu?',[R`$P(D)=0{,}02+0{,}06+0{,}02=0{,}1$.`,R`$P(H_3\mid D)=0{,}02/0{,}1=0{,}2$.`])
]),
L('bernoulli',1,'Lược đồ Bernoulli','Đếm số lần thành công','Một phép thử Bernoulli khác với lược đồ n phép thử Bernoulli.','Ảnh bảng · Chương 1 (phần bổ sung theo đề cương)',[
R`Điều kiện: $n$ lần thử độc lập, mỗi lần có thành công/thất bại, xác suất thành công $p$ không đổi.`,
R`$X\sim\mathrm{Bin}(n,p):\quad P(X=k)=\binom nk p^k(1-p)^{n-k},\ k=0,\ldots,n$.`,
R`$P(X\ge1)=1-(1-p)^n$; $E(X)=np$; $V(X)=np(1-p)$.`
],['Xác định thế nào là thành công và kiểm tra ba điều kiện.','Đặt X là số lần thành công; dịch “ít nhất”, “nhiều nhất”.','Áp dụng công thức hoặc dùng biến cố đối.'],Q('Nộp bài đúng hạn','Mỗi sinh viên nộp đúng hạn với xác suất 0,8, độc lập. Trong 5 sinh viên, tính xác suất đúng 4 người nộp đúng hạn.',[R`$X\sim\mathrm{Bin}(5,0{,}8)$. Chọn vị trí 4 người thành công: $\binom54$.`,R`Mỗi cấu hình có xác suất $0{,}8^4\cdot0{,}2$.`,R`$P(X=4)=5\cdot0{,}8^4\cdot0{,}2=0{,}4096$.`]),'Lấy không hoàn lại từ một hộp hữu hạn thường không phải lược đồ Bernoulli.',[
Q('Ba lần thành công','4 lần thử độc lập, mỗi lần thành công 0,5. Tính xác suất đúng 3 lần thành công.',[R`$X\sim\mathrm{Bin}(4,0{,}5)$.`,R`$P(X=3)=\binom43(0{,}5)^4=1/4$.`]),
Q('Ít nhất một lần trúng','Bắn độc lập 3 lần, mỗi lần trúng 0,7. Xác suất ít nhất một lần trúng?',[R`Dùng đối là cả 3 lần trượt.`,R`$P(X\ge1)=1-0{,}3^3=0{,}973$.`]),
Q('Nhiều nhất một lỗi','5 sản phẩm lỗi độc lập với xác suất 0,1. Tính xác suất nhiều nhất 1 sản phẩm lỗi.',[R`$X\sim\mathrm{Bin}(5,0{,}1)$. Cần $P(X=0)+P(X=1)$.`,R`$0{,}9^5+5\cdot0{,}1\cdot0{,}9^4=0{,}91854$.`]),
Q('Từ hai đến ba','4 khách mua hàng độc lập với xác suất 0,6 mỗi khách. Xác suất có 2 hoặc 3 người mua?',[R`$P(2\le X\le3)=\binom42 0{,}6^2 0{,}4^2+\binom43 0{,}6^3 0{,}4$.`,R`$=0{,}3456+0{,}3456=0{,}6912$.`]),
Q('Đúng một lỗi','10 linh kiện có lỗi độc lập, mỗi linh kiện lỗi 0,02. Xác suất đúng 1 lỗi?',[R`$X\sim\mathrm{Bin}(10,0{,}02)$.`,R`$P(X=1)=10\cdot0{,}02\cdot0{,}98^9\approx0{,}16675$.`]),
Q('Kỳ vọng đơn hàng','20 người dùng độc lập, xác suất đặt hàng là 0,3. Tính kỳ vọng và phương sai số đơn.',[R`$X\sim\mathrm{Bin}(20,0{,}3)$.`,R`$E(X)=20\cdot0{,}3=6$; $V(X)=20\cdot0{,}3\cdot0{,}7=4{,}2$.`]),
Q('Bao nhiêu lần thử?','Mỗi lần truyền gói tin thành công 0,8, độc lập. Cần ít nhất bao nhiêu lần để xác suất có ít nhất một lần thành công đạt 0,99?',[R`$1-0{,}2^n\ge0{,}99\iff0{,}2^n\le0{,}01$.`,R`$n\ge\ln(0{,}01)/\ln(0{,}2)\approx2{,}8614$. Lấy số nguyên nhỏ nhất $n=3$.`]),
Q('Tìm xác suất thành công','Hai phép thử độc lập cùng xác suất thành công p. Biết xác suất cả hai thất bại là 0,09. Tìm p.',[R`$(1-p)^2=0{,}09$. Vì $0\le1-p\le1$ nên $1-p=0{,}3$.`,R`Vậy $p=0{,}7$.`]),
Q('Có dùng nhị thức không?','Lấy 3 sản phẩm không hoàn lại từ hộp 5 tốt, 5 lỗi. Số sản phẩm lỗi có phân phối nhị thức với p=0,5 không?',[R`Không. Sau mỗi lần lấy, tỷ lệ lỗi của hộp có thể thay đổi nên các lần lấy không độc lập.`,R`Dùng đếm không hoàn lại: $P(X=k)=\binom5k\binom5{3-k}/\binom{10}3$, $k=0,1,2,3$.`]),
Q('Tất cả đạt hoặc tất cả trượt','6 bài kiểm tra độc lập, xác suất đạt mỗi bài 0,5. Xác suất cả 6 đạt hoặc cả 6 trượt?',[R`Hai sự kiện xung khắc là $X=6$ và $X=0$.`,R`$P=0{,}5^6+0{,}5^6=1/32$.`])
]),
L('bang-roi-rac',2,'Bảng phân phối rời rạc','Từ tình huống đến bảng','Liệt kê giá trị X, tính từng xác suất và kiểm tra tổng bằng 1.','Giáo trình tr. 6–17, 36–37 · Ảnh vở: lấy phế phẩm',[
R`$p_X(x_i)=P(X=x_i)\ge0$; $\sum_i p_X(x_i)=1$.`,
R`Lấy $n$ phần tử không hoàn lại từ $N$ phần tử có $M$ phần tử loại cần đếm: $P(X=k)=\dfrac{\binom Mk\binom{N-M}{n-k}}{\binom Nn}$.`,
R`$\max(0,n-(N-M))\le k\le\min(n,M)$.`
],['Đặt X là đại lượng đếm; xác định đủ các giá trị có thể có.','Dùng cây xác suất hoặc tổ hợp cho từng X=k.','Lập bảng theo thứ tự tăng dần, kiểm tra tổng bằng 1.'],Q('Ví dụ 3 đã hiệu chỉnh','Hộp có 10 sản phẩm, 4 phế phẩm. Lấy ngẫu nhiên 2 sản phẩm không hoàn lại. Lập bảng X là số phế phẩm.',[R`$X(\Omega)=\{0,1,2\}$; tổng số cách lấy là $\binom{10}2=45$.`,R`$p(0)=\binom40\binom62/45=1/3$; $p(1)=\binom41\binom61/45=8/15$; $p(2)=\binom42\binom60/45=2/15$.`,R`Bảng: $X:0;1;2$ và $p:1/3;8/15;2/15$. Tổng $5/15+8/15+2/15=1$.`,R`Nhiều nhất một phế phẩm: $P(X\le1)=13/15$. Ít nhất một: $P(X\ge1)=2/3$.`]),'Ảnh vở ghi p(0)=1/2 là sai số tính toán; phải là 1/3. “Ít nhất” và “nhiều nhất” là hai yêu cầu khác nhau.',[
Q('Ba sản phẩm từ hộp tám','Hộp 8 sản phẩm có 3 lỗi. Lấy 3 không hoàn lại. Lập bảng số lỗi X.',[R`$X=0,1,2,3$; $p(k)=\binom3k\binom5{3-k}/\binom83$.`,R`Bảng xác suất: $10/56;30/56;15/56;1/56$. Tổng tử bằng 56.`],'Giáo trình · Bài 2, tr. 36'),
Q('Tham số còn thiếu',R`$X$ nhận $-2,0,1,3$ với xác suất $0{,}1;a;0{,}5;0{,}2$. Tìm a và $P(X>0)$.`,[R`Chuẩn hóa: $a=1-0{,}1-0{,}5-0{,}2=0{,}2$. Mọi xác suất đều không âm.`,R`$P(X>0)=0{,}5+0{,}2=0{,}7$.`],'Giáo trình · Bài 4, tr. 37'),
Q('Ba đồng xu','Tung 3 đồng xu cân đối, độc lập. Lập bảng số mặt ngửa X.',[R`$X=0,1,2,3$, $p(k)=\binom3k/8$.`,R`Bảng: $1/8;3/8;3/8;1/8$. Có thể dựng cây 3 tầng để đếm từng nhánh.`]),
Q('Bốc hai bi','Hộp 3 bi đỏ, 2 xanh. Lấy 2 không hoàn lại. X là số bi đỏ. Lập bảng.',[R`$X=0,1,2$ và $\binom52=10$.`,R`$p(0)=1/10$, $p(1)=6/10$, $p(2)=3/10$. Tổng bằng 1.`]),
Q('Điều kiện hợp lệ',R`Bảng xác suất $p(0)=k$, $p(1)=2k$, $p(2)=3k$. Tìm k.`,[R`$k+2k+3k=1$ cho $k=1/6$.`,R`Bảng: $1/6;1/3;1/2$, đều không âm.`]),
Q('Hai lần hoàn lại','Hộp 2 bi đỏ, 3 xanh. Lấy 2 lần có hoàn lại. Lập bảng số lần lấy đỏ.',[R`$X\sim\mathrm{Bin}(2,2/5)$ vì hai lần độc lập.`,R`$p(0)=9/25$, $p(1)=12/25$, $p(2)=4/25$.`]),
Q('Số lớn hơn','Tung hai xúc xắc cân đối độc lập. X là số chấm lớn nhất. Lập công thức p(k).',[R`$X=1,\ldots,6$. Có $k^2$ cặp có cả hai mặt không quá k.`,R`Số cặp có lớn nhất đúng k là $k^2-(k-1)^2=2k-1$. Do đó $p(k)=(2k-1)/36$.`]),
Q('Miền giá trị bị chặn','Hộp 2 tốt, 4 lỗi. Lấy 3 không hoàn lại. X là số lỗi. Tìm miền giá trị và bảng.',[R`Không thể có 0 lỗi vì chỉ có 2 tốt. $X=1,2,3$.`,R`$p(1)=\binom41\binom22/20=1/5$; $p(2)=\binom42\binom21/20=3/5$; $p(3)=1/5$.`]),
Q('Chỉ báo khách hàng','Một khách mua hàng với xác suất 0,35. X=1 nếu mua và X=0 nếu không. Lập bảng.',[R`Đây là biến chỉ báo, chỉ nhận $0,1$.`,R`$P(X=1)=0{,}35$, $P(X=0)=0{,}65$.`]),
Q('Bảng giả',R`Một bảng có xác suất $0{,}2;0{,}5;0{,}4;-0{,}1$. Tổng bằng 1. Bảng có hợp lệ?`,[R`Không: ngoài tổng bằng 1, mỗi xác suất phải không âm.`,R`Giá trị $-0{,}1$ vi phạm điều kiện nên không là bảng phân phối.`])
]),
L('cdf-roi-rac',2,'Hàm tích lũy rời rạc','Chú ý dấu bằng','CDF là tổng xác suất từ trái sang, gồm cả điểm đang xét.','Giáo trình tr. 28–35 · Ảnh vở: Ví dụ 5',[
R`$F_X(x)=P(X\le x)=\sum_{x_i\le x}p_X(x_i)$. CDF không giảm và liên tục bên phải.`,
R`$P(a<X\le b)=F_X(b)-F_X(a)$; $P(a\le X\le b)=F_X(b)-F_X(a^-)$, với $F_X(a^-)=\lim_{t\uparrow a}F_X(t)$.`,
R`$P(X=a)=F_X(a)-F_X(a^-)$; $P(X>a)=1-F_X(a)$.`
],['Sắp xếp các giá trị X tăng dần.','Cộng dồn xác suất, viết các khoảng đóng trái, mở phải.','Dịch dấu bất đẳng thức cẩn thận trước khi trừ CDF.'],Q('Ví dụ 5',R`$X=-1,0,1,2$ với $p=0{,}1;0{,}2;0{,}25;0{,}45$. Tìm CDF và hai xác suất $P(0<X\le2)$, $P(0\le X\le2)$.`,[R`$$F_X(x)=\begin{cases}0&x<-1\\0{,}1&-1\le x<0\\0{,}3&0\le x<1\\0{,}55&1\le x<2\\1&x\ge2.\end{cases}$$`,R`$P(0<X\le2)=F(2)-F(0)=1-0{,}3=0{,}7$.`,R`$P(0\le X\le2)=F(2)-F(0^-)=1-0{,}1=0{,}9$. Điểm 0 có khối xác suất 0,2.`,R`$F(0)=0{,}3$, $F(1)=0{,}55$, $F(\sqrt2)=0{,}55$.`]),'Không dùng F(b)−F(a) cho khoảng đóng cả hai đầu của biến rời rạc.',[
Q('Bậc thang ba giá trị',R`$X=0,1,2$ với $p=0{,}2;0{,}5;0{,}3$. Viết F(x).`,[R`Cộng dồn: $0{,}2;0{,}7;1$.`,R`$F(x)=0$ khi $x<0$; $0{,}2$ khi $0\le x<1$; $0{,}7$ khi $1\le x<2$; $1$ khi $x\ge2$.`]),
Q('Điểm không thuộc miền',R`$X=-2,1,4$ với $p=0{,}1;0{,}6;0{,}3$. Tính F(0), F(1), F(3).`,[R`Không quá 0 chỉ có -2, nên $F(0)=0{,}1$.`,R`Không quá 1 hay 3 đều gồm -2 và 1: $F(1)=F(3)=0{,}7$.`]),
Q('Khoảng đóng',R`$X=0,1,2,3$ có xác suất $0{,}1;0{,}2;0{,}3;0{,}4$. Tính $P(1\le X\le2)$.`,[R`Cộng trực tiếp $p(1)+p(2)=0{,}5$.`,R`Hoặc $F(2)-F(1^-)=0{,}6-0{,}1=0{,}5$.`]),
Q('Khoảng mở',R`Cùng bảng $X=0,1,2,3$, $p=0{,}1;0{,}2;0{,}3;0{,}4$. Tính $P(1<X<3)$.`,[R`Chỉ X=2 thỏa mãn nên xác suất $0{,}3$.`,R`Hoặc $F(3^-)-F(1)=0{,}6-0{,}3=0{,}3$.`]),
Q('Lấy lại PMF',R`CDF nhảy từ 0,2 lên 0,65 tại x=1. Tính P(X=1).`,[R`Khối xác suất tại 1 bằng độ cao bước nhảy.`,R`$P(X=1)=F(1)-F(1^-)=0{,}65-0{,}2=0{,}45$.`]),
Q('Đuôi bên phải',R`$X=1,2,3$ với $p=0{,}2;0{,}3;0{,}5$. Tính $P(X>2)$ và $P(X\ge2)$.`,[R`$P(X>2)=1-F(2)=1-0{,}5=0{,}5$.`,R`$P(X\ge2)=1-F(2^-)=1-0{,}2=0{,}8$.`]),
Q('Điểm âm',R`$X=-2,0,1,3$ với $p=0{,}1;0{,}2;0{,}5;0{,}2$. Tính F(-2), F(-1), F(3).`,[R`Dấu bằng được tính: $F(-2)=0{,}1$. Không có giá trị mới trước 0 nên $F(-1)=0{,}1$.`,R`3 là giá trị lớn nhất nên $F(3)=1$.`]),
Q('Khôi phục bảng',R`F(x)=0 khi x<0; 0,4 khi 0≤x<2; 0,9 khi 2≤x<5; 1 khi x≥5. Tìm bảng phân phối.`,[R`Các bước nhảy ở 0,2,5 nên X chỉ nhận ba giá trị này.`,R`$p(0)=0{,}4$; $p(2)=0{,}9-0{,}4=0{,}5$; $p(5)=1-0{,}9=0{,}1$.`]),
Q('CDF không hợp lệ','Một hàm nhận lần lượt 0; 0,6; 0,4; 1 trên các khoảng liên tiếp. Có là CDF không?',[R`Không. Khi x tăng, xác suất tích lũy không được giảm.`,R`Đoạn đi từ 0,6 xuống 0,4 vi phạm tính không giảm.`]),
Q('Giá trị nửa nguyên',R`$X=0;0{,}5;1$ với xác suất $0{,}2;0{,}3;0{,}5$. Tính $P(0{,}5\le X\le1)$.`,[R`$F(1)=1$ và $F(0{,}5^-)=0{,}2$.`,R`$P=1-0{,}2=0{,}8$. Không tự lùi cận dưới một đơn vị vì X không chỉ nhận số nguyên.`])
]),
L('moment-roi-rac',2,'Kỳ vọng & phương sai rời rạc','Trung bình và độ phân tán','Tính E(X), E(X²), rồi mới lấy hiệu để tìm phương sai.','Giáo trình tr. 51–58, 61–68 · Ảnh vở: kỳ vọng',[
R`$E[g(X)]=\sum_i g(x_i)p_i$; $E(X^m)=\sum_i x_i^m p_i$.`,
R`$E(aX+b)=aE(X)+b$; $E(aX+bY+c)=aE(X)+bE(Y)+c$ (không cần độc lập).`,
R`$V(X)=E(X^2)-[E(X)]^2$; $V(aX+b)=a^2V(X)$; $\sigma_X=\sqrt{V(X)}$.`,
R`$V(aX+bY+c)=a^2V(X)+b^2V(Y)+2ab\operatorname{Cov}(X,Y)$. Nếu độc lập, hiệp phương sai bằng 0.`
],['Lập thêm cột x·p và x²·p; cộng từng cột.','Dùng V(X)=E(X²)−[E(X)]².','Biến đổi tuyến tính: kỳ vọng dùng hệ số a, phương sai dùng a².'],Q('Bảng trong ảnh vở',R`$X=-2,0,4$ có xác suất $0{,}1;0{,}3;0{,}6$. Tính $E(X)$, $E(2X+3)$ và $V(X)$.`,[R`$E(X)=(-2)0{,}1+0\cdot0{,}3+4\cdot0{,}6=2{,}2$.`,R`$E(2X+3)=2E(X)+3=7{,}4$. Hằng số 3 được nhân với tổng xác suất bằng 1.`,R`$E(X^2)=4\cdot0{,}1+16\cdot0{,}6=10$.`,R`$V(X)=10-2{,}2^2=5{,}16$. Không thay $E(X^2)$ bằng $[E(X)]^2$.`]),'Với X,Y độc lập, V(3X−4Y+5)=9V(X)+16V(Y). Dấu trừ vẫn cho hệ số phương sai dương.',[
Q('Bài 8 và 11',R`$X=1,2,3,4$, $p=0{,}1;0{,}2;0{,}3;0{,}4$. Tính E(X), E(X²), V(X), E(3X+2), V(3X+2).`,[R`$E(X)=0{,}1+0{,}4+0{,}9+1{,}6=3$.`,R`$E(X^2)=0{,}1+0{,}8+2{,}7+6{,}4=10$; $V(X)=10-9=1$.`,R`$E(3X+2)=11$; $V(3X+2)=9$.`],'Giáo trình · tr. 58, 68'),
Q('Trò chơi có công bằng?','Trả 4 nghìn để tung xúc xắc cân đối, nhận số nghìn bằng số chấm. Tính lợi nhuận kỳ vọng.',[R`Tiền nhận X có $E(X)=(1+2+3+4+5+6)/6=3{,}5$.`,R`Lãi ròng $Y=X-4$ nên $E(Y)=-0{,}5$ nghìn. Không công bằng theo tiêu chí kỳ vọng bằng 0.`],'Giáo trình · Ví dụ 12, tr. 56'),
Q('Một biến chỉ báo',R`$X=1$ với xác suất p và 0 với xác suất 1−p. Tính E(X), V(X).`,[R`$E(X)=p$ và $E(X^2)=p$ vì $X^2=X$.`,R`$V(X)=p-p^2=p(1-p)$.`]),
Q('Tính chất trên bảng',R`X,Y độc lập; V(X)=4, V(Y)=6. Tính V(3X−4Y+5).`,[R`Độc lập cho $\operatorname{Cov}(X,Y)=0$; hằng số 5 không đóng góp.`,R`$V=3^2\cdot4+(-4)^2\cdot6=36+96=132$.`],'Ảnh bảng · Ví dụ phương sai'),
Q('Kỳ vọng không cần độc lập',R`E(X)=2, E(Y)=−1. Tính E(3X−2Y+4), không biết X,Y có độc lập hay không.`,[R`Tính tuyến tính luôn dùng được khi kỳ vọng hữu hạn.`,R`$E(3X-2Y+4)=3\cdot2-2(-1)+4=12$.`]),
Q('Biến ngẫu nhiên hằng',R`X luôn bằng 7. Tính E(X), E(X²), V(X) và V(−2X+1).`,[R`$E(X)=7$, $E(X^2)=49$.`,R`$V(X)=49-49=0$; $V(-2X+1)=4\cdot0=0$.`]),
Q('Hàm phi tuyến',R`X=−1,0,2 có p=0,2;0,5;0,3. Tính E(X²−X).`,[R`$g(-1)=2$, $g(0)=0$, $g(2)=2$.`,R`$E(X^2-X)=2\cdot0{,}2+0+2\cdot0{,}3=1$.`]),
Q('Độ lệch chuẩn',R`V(X)=9. Tính độ lệch chuẩn của Y=−2X+100.`,[R`$\sigma_X=\sqrt9=3$.`,R`$\sigma_Y=|-2|\sigma_X=6$. Dịch thêm 100 không đổi độ phân tán.`]),
Q('Hai biến phụ thuộc',R`V(X)=4 và Y=X. Tính V(X+Y), giải thích vì sao không bằng V(X)+V(Y).`,[R`$X+Y=2X$ nên $V(X+Y)=4V(X)=16$.`,R`$V(X)+V(Y)=8$ thiếu $2\operatorname{Cov}(X,Y)=8$. X,Y không độc lập.`]),
Q('Sai số bình phương',R`E(X)=μ, V(X)=σ² hữu hạn. Chứng minh E[(X−c)²]=σ²+(μ−c)².`,[R`Viết $X-c=(X-\mu)+(\mu-c)$ rồi khai triển bình phương.`,R`Số hạng chéo có kỳ vọng $2(\mu-c)E(X-\mu)=0$.`,R`Còn $\sigma^2+(\mu-c)^2$, nhỏ nhất tại $c=\mu$.`],'Giáo trình · Bài 10, tr. 58')
]),
L('doi-bien-roi-rac',2,'Biến đổi Y=g(X) rời rạc','Gom ảnh, cộng xác suất','Các giá trị khác nhau của X có thể cho cùng một Y.','Giáo trình tr. 40–41, 48 · Ảnh vở: Bài 5',[
R`$Y(\Omega)=\{g(x_i):p_X(x_i)>0\}$ (bỏ giá trị trùng).`,
R`$p_Y(y)=\sum_{i:g(x_i)=y}p_X(x_i)$.`,
R`Sau khi gom: $\sum_y p_Y(y)=1$ và $E(Y)=\sum_i g(x_i)p_X(x_i)$.`
],['Viết từng cặp x → g(x).','Gom các x cho cùng y; cộng xác suất tương ứng.','Sắp y tăng dần, lập bảng mới và kiểm tra tổng.'],Q('Hàm không đơn ánh',R`$X=-1,0,1,2$, $p=0{,}2;0{,}3;0{,}3;0{,}2$. Tìm phân phối $Y=X^2-X$.`,[R`Bảng ảnh: $-1\mapsto2$, $0\mapsto0$, $1\mapsto0$, $2\mapsto2$.`,R`$P(Y=0)=P(X=0)+P(X=1)=0{,}6$.`,R`$P(Y=2)=P(X=-1)+P(X=2)=0{,}4$. Bảng Y: $0;2$, p: $0{,}6;0{,}4$.`,R`Nếu $Y=2X+1$ thay thế, ảnh là $-1,1,3,5$ và giữ từng xác suất cũ vì phép đổi đơn ánh.`]),'Không để hai cột Y trùng nhau trong bảng kết quả; phải gom xác suất.',[]),
L('mat-do',2,'Mật độ & xác suất liên tục','Xác suất là diện tích','Chuẩn hóa mật độ và lấy giao với miền hỗ trợ trước khi tích phân.','Giáo trình tr. 18–26, 36–37 · Ảnh vở: tích phân',[
R`$f_X(x)\ge0$; $\int_{-\infty}^{\infty}f_X(x)\,dx=1$.`,
R`$P(a\le X\le b)=\int_a^b f_X(x)\,dx$; ngoài miền hỗ trợ, $f_X(x)=0$.`,
R`$P(X=a)=0$; $f_X(a)$ không phải xác suất tại a và có thể lớn hơn 1.`
],['Xác định miền hỗ trợ và kiểm tra không âm.','Tìm k từ tích phân toàn miền bằng 1.','Cắt khoảng cần tính theo miền hỗ trợ, rồi tích phân.'],Q('Ví dụ 4',R`$f_X(x)=kx^2$ trên [0,1], bằng 0 ngoài khoảng. Tìm k, $P(0{,}5<X<2)$ và a sao cho $P(X<a)=3/4$.`,[R`Chuẩn hóa: $1=\int_0^1kx^2dx=k/3$, nên $k=3$ và mật độ không âm.`,R`Giao $(0{,}5;2)$ với [0,1] là $(0{,}5;1]$. $P=\int_{1/2}^1 3x^2dx=1-1/8=7/8$.`,R`Với $0<a<1$, $P(X<a)=\int_0^a3x^2dx=a^3=3/4$, nên $a=\sqrt[3]{3/4}$.`]),'Không tích phân biểu thức mật độ qua vùng mà biểu thức đó không còn áp dụng.',[
Q('Mật độ tam giác',R`$f(x)=kx$ trên [0,2], ngoài bằng 0. Tìm k và P(1<X<3).`,[R`$k\int_0^2x\,dx=2k=1\Rightarrow k=1/2$.`,R`Cắt khoảng tại 2: $P=\int_1^2x/2\,dx=3/4$.`]),
Q('Bài 1',R`$f(x)=kx(3-x)$ trên [0,3]. Tìm k, P(0,5<X<2), P(2<X<4).`,[R`$\int_0^3x(3-x)dx=9/2$ nên $k=2/9$.`,R`Nguyên hàm chuẩn hóa $H(x)=x^2/3-2x^3/27$.`,R`$P(1/2<X<2)=H(2)-H(1/2)=2/3$; $P(2<X<4)=1-H(2)=7/27$.`],'Giáo trình · Bài 1a,b, tr. 36'),
Q('Đuôi vô hạn',R`$f(x)=k/x^2$ khi x≥1, ngoài bằng 0. Tìm k và P(1,5<X≤3).`,[R`$\int_1^\infty kx^{-2}dx=k=1$.`,R`$P=\int_{3/2}^3x^{-2}dx=2/3-1/3=1/3$.`],'Giáo trình · Bài 3, tr. 37'),
Q('Mật độ đều',R`f(x)=k trên [2,6]. Tìm k, P(X>5) và P(X=5).`,[R`Diện tích hình chữ nhật $4k=1$, nên $k=1/4$.`,R`$P(X>5)=\int_5^6(1/4)dx=1/4$; $P(X=5)=0$.`]),
Q('Dạng giảm',R`$f(x)=k(1-x)$ trên [0,1]. Tìm k và P(X<1/2).`,[R`$k\int_0^1(1-x)dx=k/2=1$, nên $k=2$.`,R`$P=\int_0^{1/2}2(1-x)dx=[2x-x^2]_0^{1/2}=3/4$.`]),
Q('Dạng trong ảnh',R`$f(x)=k(1-x^2)$ trên [0,1]. Tìm k và P(X>1/2).`,[R`$k(1-1/3)=1$ cho $k=3/2$.`,R`$P=\frac32[x-x^3/3]_{1/2}^1=5/16$.`],'Ảnh vở · Mật độ 3(1−x²)/2'),
Q('Mật độ vượt 1',R`f(x)=2 trên [0;0,5], ngoài bằng 0. Hàm có là mật độ không? Tính P(0<X<0,1).`,[R`Hàm không âm, tích phân $2\cdot0{,}5=1$, nên hợp lệ dù f>1.`,R`$P=2\cdot0{,}1=0{,}2$.`]),
Q('Hai khoảng hỗ trợ',R`f(x)=k trên [0,1]∪[2,4], ngoài bằng 0. Tìm k và P(0,5<X<3).`,[R`Tổng độ dài hỗ trợ là $1+2=3$, nên $k=1/3$.`,R`Khoảng cần tính chỉ có [0,5;1] và [2;3], độ dài $0{,}5+1=1{,}5$. $P=1/2$.`]),
Q('Miền đối xứng',R`$f(x)=k|x|$ trên [−1,1], ngoài bằng 0. Tìm k và P(|X|<1/2).`,[R`$\int_{-1}^1k|x|dx=2k\int_0^1x\,dx=k=1$.`,R`$P=2\int_0^{1/2}x\,dx=1/4$.`]),
Q('Không thể chuẩn hóa',R`Có k nào để f(x)=kx trên [−1,1], ngoài bằng 0 là mật độ?`,[R`Không âm trên cả hai nửa đòi hỏi k=0 vì x đổi dấu.`,R`Khi k=0 tích phân bằng 0; hơn nữa tích phân hàm lẻ luôn bằng 0. Không có k phù hợp.`])
]),
L('cdf-lien-tuc',2,'Hàm tích lũy liên tục','Tích phân từ −∞ đến x','Viết đầy đủ các nhánh trước, trong và sau miền hỗ trợ.','Giáo trình tr. 28–35 · Ảnh vở: F(x)=x²',[
R`$F_X(x)=\int_{-\infty}^x f_X(t)\,dt$. Nếu f hỗ trợ trên [a,b], F=0 trước a và F=1 sau b.`,
R`$f_X(x)=F'_X(x)$ tại điểm khả vi; $P(a<X<b)=F_X(b)-F_X(a)$ đối với biến có mật độ.`,
R`CDF của biến có mật độ phải liên tục; tìm tham số bằng giới hạn ở biên và điều kiện F(+∞)=1.`
],['Chia trục theo các mốc của mật độ.','Tích phân cộng dồn các đoạn trước và đoạn chứa x.','Kiểm tra tính liên tục, không giảm và hai giới hạn 0,1.'],Q('Mật độ 2x',R`$f(x)=2x$ trên [0,1], ngoài bằng 0. Tìm F(x).`,[R`Với $x<0$, toàn bộ miền tích phân nằm ngoài hỗ trợ nên F=0.`,R`Với $0\le x<1$, $F(x)=\int_0^x2t\,dt=x^2$.`,R`Với $x\ge1$, $F(x)=\int_0^12t\,dt=1$. Như vậy $F=0;x^2;1$ theo ba khoảng tương ứng.`,R`$P(1/4<X<3/4)=F(3/4)-F(1/4)=9/16-1/16=1/2$.`]),'Đừng lấy nguyên hàm đơn thuần mà quên hằng số tích lũy từ các đoạn trước.',[
Q('Lũy thừa bậc ba',R`$f(x)=3x^2$ trên [0,1]. Tìm F và P(X≤1/2).`,[R`Trong [0,1], $F(x)=\int_0^x3t^2dt=x^3$. Ngoài: 0 trước 0, 1 từ 1 trở đi.`,R`$F(1/2)=1/8$.`]),
Q('Đều trên đoạn lệch',R`X đều trên [2,6]. Tìm F(x) và P(3<X<5).`,[R`$F(x)=0$ nếu $x<2$; $(x-2)/4$ nếu $2\le x<6$; $1$ nếu $x\ge6$.`,R`$P=F(5)-F(3)=3/4-1/4=1/2$.`]),
Q('Mật độ giảm',R`$f(x)=2(1-x)$ trên [0,1]. Tìm CDF và trung vị m.`,[R`CDF ở [0,1]: $F(x)=2x-x^2$, ngoài là 0 và 1.`,R`$2m-m^2=1/2$. Nghiệm trong [0,1] là $m=1-1/\sqrt2$.`]),
Q('Từ CDF ra mật độ',R`F(x)=0 nếu x<0; x²/4 nếu 0≤x<2; 1 nếu x≥2. Tìm f và P(X>1).`,[R`Lấy đạo hàm trong (0,2): $f(x)=x/2$, ngoài bằng 0 (giá trị tại biên không ảnh hưởng).`,R`$P(X>1)=1-F(1)=3/4$.`]),
Q('Ví dụ 6',R`X có mật độ và CDF bằng 0 nếu x<0; cx²(9−2x) nếu 0≤x≤3; m−1 nếu x>3. Tìm c,m và f.`,[R`Giới hạn tại vô cực: $m-1=1\Rightarrow m=2$. Liên tục tại 3: $27c=1\Rightarrow c=1/27$.`,R`$f(x)=\frac{d}{dx}[x^2(9-2x)/27]=2x(3-x)/9$ trên (0,3), ngoài 0.`,R`Kiểm tra f không âm và tích phân bằng 1; $P(-1<X<1)=F(1)=7/27$.`],'Giáo trình · Ví dụ 6, tr. 34'),
Q('Hỗ trợ có khoảng trống',R`f(x)=1/3 trên [0,1]∪[2,4], ngoài 0. Tìm F(x).`,[R`Trước 0: F=0; trên [0,1): $F=x/3$; trên [1,2): $F=1/3$.`,R`Trên [2,4): $F=1/3+(x-2)/3=(x-1)/3$; từ 4 trở đi F=1.`]),
Q('Đuôi vô hạn',R`$f(x)=1/x^2$ khi x≥1, ngoài 0. Tìm F và P(X>4).`,[R`Trước 1: F=0. Từ 1: $F(x)=\int_1^xt^{-2}dt=1-1/x$.`,R`$P(X>4)=1-F(4)=1/4$.`]),
Q('Nhận diện điểm nhảy','F bằng 0 khi x<0, bằng 1/2+x/2 khi 0≤x<1, bằng 1 khi x≥1. Có thể là CDF của biến có mật độ không?',[R`F có bước nhảy 1/2 tại 0, nên $P(X=0)=1/2$.`,R`Đây có thể là CDF của phân phối hỗn hợp, nhưng không phải của biến chỉ có mật độ vì CDF không liên tục.`]),
Q('Phân vị',R`$F(x)=x^3$ trên [0,1]. Tìm q sao cho P(X≤q)=0,9.`,[R`Giải $q^3=0{,}9$ với q thuộc [0,1].`,R`$q=\sqrt[3]{0{,}9}\approx0{,}96549$.`]),
Q('Dấu bằng liên tục',R`$F(x)=x^2$ trên [0,1]. So sánh P(0,2<X<0,6) và P(0,2≤X≤0,6).`,[R`X có mật độ nên xác suất tại mỗi đầu mút bằng 0; hai xác suất bằng nhau.`,R`Cùng bằng $0{,}6^2-0{,}2^2=0{,}32$.`])
]),
L('moment-lien-tuc',2,'Kỳ vọng & phương sai liên tục','Đưa g(x) vào tích phân','Tính moment bằng tích phân, sử dụng tính chất để tránh tính lại.','Giáo trình tr. 51–55, 58, 61–68 · Ảnh vở: 3(1−x²)/2',[
R`$E[g(X)]=\int_{-\infty}^{\infty}g(x)f_X(x)\,dx$, khi tích phân hội tụ tuyệt đối.`,
R`$E(X^m)=\int x^mf_X(x)\,dx$; $V(X)=E(X^2)-[E(X)]^2$.`,
R`$E(aX+b)=aE(X)+b$; $V(aX+b)=a^2V(X)$; nếu X,Y độc lập và phương sai hữu hạn, $V(aX+bY)=a^2V(X)+b^2V(Y)$.`
],['Lấy đúng miền hỗ trợ làm cận tích phân.','Nhân mật độ với x cho E(X), với x² cho E(X²).','Tính V, rồi áp dụng tính chất; kiểm tra V≥0 và đơn vị.'],Q('Ví dụ trong ảnh vở',R`$f(x)=\tfrac32(1-x^2)$ trên [0,1]. Tính E(X), E(X²), E(2X+3), E(−4X), V(X).`,[R`$E(X)=\frac32\int_0^1(x-x^3)dx=\frac32(1/2-1/4)=3/8$.`,R`$E(X^2)=\frac32\int_0^1(x^2-x^4)dx=\frac32(1/3-1/5)=1/5$.`,R`$E(2X+3)=2\cdot3/8+3=15/4$; $E(-4X)=-4\cdot3/8=-3/2$.`,R`$V(X)=1/5-9/64=19/320$. Đây là cách tính trực tiếp bằng mật độ rồi dùng tính chất như ảnh vở.`]),'E(X²) và [E(X)]² là hai đại lượng khác nhau. Kỳ vọng có thể không tồn tại dù mật độ hợp lệ.',[
Q('Mật độ bậc hai',R`$f(x)=3x^2$ trên [0,1]. Tính E(X), E(X²), V(X).`,[R`$E(X)=3\int_0^1x^3dx=3/4$; $E(X^2)=3\int_0^1x^4dx=3/5$.`,R`$V(X)=3/5-9/16=3/80$.`]),
Q('Khối lượng sản phẩm',R`$f(x)=\tfrac34(2x-x^2)$ trên [0,2]. Tính E(X), V(X).`,[R`$E(X)=\frac34\int_0^2(2x^2-x^3)dx=1$.`,R`$E(X^2)=\frac34\int_0^2(2x^3-x^4)dx=6/5$.`,R`$V(X)=6/5-1=1/5$ (kg² nếu X đo kg).`],'Giáo trình · Bài 9,12, tr. 58,68'),
Q('Phương sai tuyến tính',R`$f(x)=2x$ trên [0,1]. Tính E(3X−2), V(3X−2).`,[R`$E(X)=2/3$, $E(X^2)=1/2$ nên $V(X)=1/18$.`,R`$E(3X-2)=0$; $V(3X-2)=9/18=1/2$.`]),
Q('Chi phí chờ đợi','Thời gian chờ X đều trên [0,10] phút. Chi phí Y=5X+20 nghìn. Tính E(Y) và V(Y).',[R`$E(X)=\int_0^{10}x/10\,dx=5$; $E(X^2)=100/3$ nên $V(X)=25/3$.`,R`$E(Y)=45$ nghìn; $V(Y)=25\cdot25/3=625/3$ (nghìn đồng)².`]),
Q('Moment tổng quát',R`$f(x)=2x$ trên [0,1]. Tính E(X^m) với m nguyên không âm.`,[R`$E(X^m)=\int_0^12x^{m+1}dx$.`,R`$E(X^m)=2/(m+2)$. Với m=0 kết quả bằng 1, phù hợp chuẩn hóa.`]),
Q('Hàm chi phí phi tuyến',R`$f(x)=2x$ trên [0,1]. Tính E(X²+2X+1).`,[R`Dùng tuyến tính: $E(X^2)+2E(X)+1$.`,R`$=1/2+4/3+1=17/6$. Không thay bằng $[E(X)+1]^2$.`]),
Q('Biến đối xứng',R`X đều trên [−1,1]. Tính E(X), E(X²), V(X).`,[R`Mật độ $1/2$; x·f(x) lẻ trên đoạn đối xứng nên $E(X)=0$.`,R`$E(X^2)=\frac12\int_{-1}^1x^2dx=1/3$; $V(X)=1/3$.`]),
Q('Kỳ vọng vô hạn',R`$f(x)=1/x^2$ khi x≥1. Kỳ vọng hữu hạn không?`,[R`$E(X)=\int_1^\infty x\cdot x^{-2}dx=\int_1^\infty dx/x$.`,R`Tích phân phân kỳ đến $+\infty$, nên X không có kỳ vọng hữu hạn và không áp dụng công thức phương sai hữu hạn.`]),
Q('Ví dụ 15',R`$f(x)=2x(3-x)/9$ trên [0,3]. Tính E(X), V(X), E(2X−1), V(1−1,5X).`,[R`$E(X)=\frac29\int_0^3(3x^2-x^3)dx=3/2$.`,R`$E(X^2)=\frac29\int_0^3(3x^3-x^4)dx=27/10$, nên $V(X)=9/20$.`,R`$E(2X-1)=2$; $V(1-1{,}5X)=(9/4)(9/20)=81/80$.`],'Giáo trình · Ví dụ 15, tr. 67'),
Q('Chuẩn hóa',R`E(X)=10, V(X)=4. Đặt Z=(X−10)/2. Tính E(Z), V(Z).`,[R`$E(Z)=(E(X)-10)/2=0$.`,R`$V(Z)=V(X)/4=1$. Chuẩn hóa không tự làm Z có phân phối chuẩn.`])
]),
L('doi-bien-lien-tuc',2,'Phân phối Y=g(X) liên tục','Tìm miền Y trước khi đổi biến','Phương pháp CDF xử lý được cả hàm tăng, giảm và nhiều nhánh.','Giáo trình tr. 42–48 · Phát triển cách trình bày từng bước trong ảnh vở',[
R`$F_Y(y)=P(Y\le y)=P(g(X)\le y)$. Tìm xác suất này theo X, rồi $f_Y(y)=F'_Y(y)$ khi Y có mật độ.`,
R`Nếu g đơn điệu, khả vi và $g'\ne0$: $f_Y(y)=f_X(g^{-1}(y))\left|\dfrac{d}{dy}g^{-1}(y)\right|$ trên miền Y.`,
R`Với $Y=X^2$, $y\ge0$: $F_Y(y)=P(-\sqrt y\le X\le\sqrt y)$; nếu X có mật độ thì $f_Y(y)=\dfrac{f_X(\sqrt y)+f_X(-\sqrt y)}{2\sqrt y}$, $y>0$.`
],['Tìm toàn bộ miền giá trị Y=g(X).','Viết F_Y(y)=P(g(X)≤y), giải bất đẳng thức theo X và cắt theo hỗ trợ.','Viết CDF đủ các nhánh; đạo hàm để có mật độ và kiểm tra tích phân bằng 1.'],Q('Hàm giảm: Y=1−X',R`$f_X(x)=2x$ trên [0,1], ngoài 0. Tìm CDF và mật độ của Y=1−X.`,[R`$0\le X\le1\Rightarrow0\le Y\le1$. Trước 0: $F_Y=0$; từ 1 trở đi: $F_Y=1$.`,R`Với $0\le y<1$, $F_Y(y)=P(1-X\le y)=P(X\ge1-y)=1-F_X(1-y)$.`,R`$F_Y(y)=1-(1-y)^2=2y-y^2$. Chuyển vế qua hệ số âm phải đảo chiều bất đẳng thức.`,R`$f_Y(y)=2(1-y)$ trên (0,1), ngoài 0. $\int_0^12(1-y)dy=1$.`]),'Y=X² trên miền có cả âm và dương cần hai nhánh; không chỉ lấy căn dương.',[])
];

// Mỗi phép biến đổi dùng cùng dữ kiện để người học tập trung vào bước gom ảnh.
const baseX=[-1,0,1,2], baseP=[.2,.3,.3,.2];
const transforms=[['2X+1',x=>2*x+1],['|X|',Math.abs],['X^2-X',x=>x*x-x],['X^2',x=>x*x],['3X+1',x=>3*x+1],['1-X',x=>1-x],['(X-1)^2',x=>(x-1)**2],['X^3',x=>x**3],['X(X-1)(X-2)',x=>x*(x-1)*(x-2)],['\u0031_{\{X>0\}}',x=>Number(x>0)]];
transforms.forEach(([tex,fn],i)=>{
 const buckets=new Map();baseX.forEach((x,j)=>{const y=fn(x);const b=buckets.get(y)||{p:0,x:[]};b.p+=baseP[j];b.x.push(x);buckets.set(y,b)});
 const rows=[...buckets].sort((a,b)=>a[0]-b[0]);
 lessons.find(l=>l.id==='doi-bien-roi-rac').exercises.push(Q(i===9?'Biến chỉ báo':`Phép đổi ${i+1}`,R`Cho $X=-1,0,1,2$ với xác suất $0{,}2;0{,}3;0{,}3;0{,}2$. Lập bảng phân phối $Y=${tex}$.`,[
 `Bước 1, lập ảnh: ${baseX.map(x=>`$${x}\\mapsto ${fn(x)}$`).join('; ')}.`,
 ...rows.map(([y,b])=>`Gom các giá trị $X\\in\\{${b.x.join(',')}\\}$: $P(Y=${y})=${b.p.toFixed(1).replace('.', '{,}')}$.`),
 `Bảng cuối: $Y: ${rows.map(x=>x[0]).join('; ')}$, $p: ${rows.map(x=>x[1].p.toFixed(1)).join('; ')}$. Tổng bằng 1.`
 ],i<3?'Giáo trình · Bài 5, tr. 48':'Bài tập biên soạn'));
});

const continuousTransforms=[
Q('Tuyến tính tăng',R`X đều trên [0,1]. Tìm CDF và mật độ Y=3X+2.`,[R`Miền Y là [2,5]. Với $2\le y<5$: $F_Y(y)=P(X\le(y-2)/3)=(y-2)/3$.`,R`$F_Y=0$ trước 2, $1$ từ 5 trở đi. $f_Y=1/3$ trên (2,5), ngoài 0; tích phân bằng 1.`],'Giáo trình · Bài 6a, tr. 48'),
Q('Logarit',R`X đều trên (0,1). Tìm phân phối Y=−ln X.`,[R`Miền $Y>0$. Với $y\ge0$: $-\ln X\le y\iff X\ge e^{-y}$.`,R`$F_Y(y)=1-e^{-y}$ nếu $y\ge0$, 0 nếu $y<0$. $f_Y(y)=e^{-y}$ trên (0,∞), ngoài 0.`,R`$\int_0^\infty e^{-y}dy=1$.`],'Giáo trình · Bài 6b, tr. 48'),
Q('Bình phương không âm',R`X đều trên [0,1]. Tìm phân phối Y=X².`,[R`Miền [0,1]. Với $0\le y<1$, $F_Y(y)=P(X\le\sqrt y)=\sqrt y$.`,R`CDF bằng 0 trước 0 và 1 từ 1. $f_Y(y)=1/(2\sqrt y)$ trên (0,1), ngoài 0.`,R`Tích phân $\int_0^1(2\sqrt y)^{-1}dy=1$ dù mật độ không bị chặn gần 0.`],'Giáo trình · Bài 6c, tr. 48'),
Q('Đảo chiều',R`f_X(x)=2x trên [0,1]. Tìm phân phối Y=1−X.`,[R`Miền [0,1]. $F_Y(y)=P(X\ge1-y)=1-(1-y)^2$ trong [0,1].`,R`CDF bằng 0 trước 0, 1 từ 1. $f_Y(y)=2(1-y)$ trên (0,1), ngoài 0; tích phân bằng 1.`],'Giáo trình · Bài 7, tr. 48'),
Q('Bình phương hai nhánh',R`X đều trên [−1,1]. Tìm CDF và mật độ Y=X².`,[R`Miền [0,1]. Với $0\le y<1$, $F_Y=P(-\sqrt y\le X\le\sqrt y)=(2\sqrt y)/2=\sqrt y$.`,R`CDF bằng 0 trước 0 và 1 từ 1. Mật độ $1/(2\sqrt y)$ trên (0,1), ngoài 0.`,R`Cả hai nhánh âm và dương đóng góp. Chỉ dùng nhánh dương sẽ thiếu một nửa xác suất.`]),
Q('Đổi bậc hai thành đều',R`f_X(x)=2x trên [0,1]. Tìm phân phối Y=X².`,[R`$F_X(x)=x^2$ trong [0,1]. Miền Y=[0,1].`,R`$F_Y(y)=F_X(\sqrt y)=y$ với $0\le y<1$, 0 trước 0 và 1 từ 1.`,R`$f_Y(y)=1$ trên (0,1), ngoài 0: Y đều trên [0,1].`]),
Q('Lũy thừa ba',R`f_X(x)=3x² trên [0,1]. Tìm phân phối Y=X³.`,[R`$F_X(x)=x^3$ trong [0,1]. Hàm lập phương tăng.`,R`$F_Y(y)=F_X(\sqrt[3]y)=y$ trên [0,1], 0 trước 0, 1 từ 1.`,R`Y đều trên [0,1], mật độ 1 trên (0,1), ngoài 0.`]),
Q('Hệ số âm',R`f_X(x)=2x trên [0,1]. Tìm phân phối Y=2−2X.`,[R`Miền Y=[0,2]. Với $0\le y<2$: $F_Y=P(X\ge1-y/2)=1-(1-y/2)^2=y-y^2/4$.`,R`CDF bằng 0 trước 0, 1 từ 2. $f_Y(y)=1-y/2$ trên (0,2), ngoài 0.`,R`$\int_0^2(1-y/2)dy=1$.`]),
Q('Nghịch đảo',R`X đều trên [1,2]. Tìm phân phối Y=1/X.`,[R`Miền Y=[1/2,1]. Hàm nghịch đảo giảm trên [1,2]. Với $1/2\le y<1$: $F_Y=P(X\ge1/y)=2-1/y$.`,R`CDF bằng 0 trước 1/2, 1 từ 1. $f_Y(y)=1/y^2$ trên (1/2,1), ngoài 0.`,R`$\int_{1/2}^1 y^{-2}dy=1$.`]),
Q('Bình phương quanh trung điểm',R`X đều trên [0,2]. Tìm phân phối Y=(X−1)².`,[R`Miền Y=[0,1]. Với $0\le y<1$: $|X-1|\le\sqrt y\iff1-\sqrt y\le X\le1+\sqrt y$.`,R`$F_Y(y)=2\sqrt y/2=\sqrt y$, 0 trước 0 và 1 từ 1.`,R`$f_Y(y)=1/(2\sqrt y)$ trên (0,1), ngoài 0. Đây là đổi biến hai nhánh.`])
];
lessons.find(l=>l.id==='doi-bien-lien-tuc').exercises=continuousTransforms;
lessons.forEach((l,li)=>l.exercises.forEach((q,qi)=>{q.id=`${l.id}-${qi+1}`;q.level=qi<3?'Cơ bản':qi<7?'Vận dụng':'Tổng hợp';q.number=li*10+qi+1;}));

export const sourceNotes = [
 ['Phạm vi trên bảng','Chương 1: phép thử, biến cố, Venn, định nghĩa xác suất, cộng–nhân, toàn phần–Bayes, Bernoulli. Chương 2: rời rạc, liên tục, phân phối, CDF, kỳ vọng, moment và biến đổi Y=g(X). Phương sai được ôn cùng kỳ vọng theo ví dụ viết bên phải bảng.'],
 ['Phần giáo trình được sử dụng','Bài giảng chương 2, Nhập môn Xác suất TN091, CBGD. Dương Thị Bé Ba, Khoa Toán học, Trường Khoa học Tự nhiên, Đại học Cần Thơ, 80 trang. Số trang ghi trên trang web là số trang PDF (1–80). Chương 1 được biên soạn bổ sung theo ảnh bảng vì chưa có PDF chương 1.'],
 ['Cách giải theo ảnh vở','Giữ quy trình đặt biến → xác định miền → lập bảng hoặc tích phân → kiểm tra. Với Y rời rạc: liệt kê ảnh rồi gom xác suất. Với Y liên tục: dùng CDF theo giáo trình tr. 42–48, trình bày từng bước. Không đưa Markov, Chebyshev vào trọng tâm vì ảnh bảng không nêu các mục này.'],
 ['Hiệu chỉnh cần nhớ','Ví dụ 3: C(6,2)/C(10,2)=15/45=1/3; bảng đúng là 1/3, 8/15, 2/15. Yêu cầu “nhiều nhất 1” trong giáo trình cho 13/15; “ít nhất 1” cho 2/3. Ảnh vở có chỗ ghi nhầm Y=3X+1 tại X=2 thành 10; giá trị đúng là 7.'],
 ['Quy ước thống nhất','Dùng F_X(x)=P(X≤x) đúng giáo trình tr. 29, dù một vài dòng trong vở dùng dấu <. Với biến rời rạc, dấu bằng làm thay đổi kết quả; với biến có mật độ thì không. Các bài tập gắn “Giáo trình” là bài gốc hoặc tách ý; các bài còn lại là bài tự biên soạn. Các đề luyện là đề mô phỏng theo cấu trúc yêu cầu.']
];
