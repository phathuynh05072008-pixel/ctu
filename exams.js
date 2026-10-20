const R=String.raw;
const T=(statement,answer,why)=>({statement,answer,why});
const E=(number,tag,tf,essay,density)=>({number,tag,tf,essay,density});
export const exams=[
E(1,'Khởi động',[
T(R`Biến cố “đúng một trong A,B xảy ra” là $A\cup B$.`,false,R`Hợp còn chứa trường hợp cả hai. Đúng một là $(A\cap\overline B)\cup(\overline A\cap B)$.`),
T(R`Với 36 kết quả đồng khả năng khi tung hai xúc xắc cân đối độc lập, xác suất tổng 7 là $1/6$.`,true,R`Có 6 cặp tổng bằng 7 nên $P=6/36=1/6$.`),
T(R`Nếu A,B độc lập thì $P(A\cap B)=P(A)P(B)$.`,true,'Đây là điều kiện đặc trưng của hai biến cố độc lập.'),
T(R`Bảng phân phối rời rạc hợp lệ nếu chỉ cần tổng các xác suất bằng 1.`,false,'Còn phải có từng xác suất không âm.'),
T(R`Luôn có $E(X^2)=[E(X)]^2$ khi các moment hữu hạn.`,false,R`Hiệu hai đại lượng bằng V(X); chỉ bằng nhau khi V(X)=0.`),
T(R`Nếu $Y=X^2$ và $X=-1,1$ có xác suất 0,4; 0,6 thì $P(Y=1)=1$.`,true,'Cả hai giá trị X đều có cùng ảnh Y=1 nên cộng 0,4+0,6.'),
T(R`Với biến có mật độ, $P(X=a)=f_X(a)$.`,false,'Xác suất tại một điểm bằng 0; mật độ không phải khối xác suất.'),
T(R`Nếu X,Y độc lập và có phương sai hữu hạn thì $V(2X-3Y+7)=4V(X)+9V(Y)$.`,true,'Hằng số không đóng góp; hiệp phương sai bằng 0 do độc lập.')
],{
 prompt:'Hai dây chuyền A,B cung cấp lần lượt 60% và 40% sản phẩm; tỷ lệ lỗi tương ứng là 2% và 5%. a) Tính tỷ lệ lỗi chung. b) Chọn một sản phẩm bị lỗi, tính xác suất từ B. c) Chọn độc lập 3 sản phẩm từ dòng sản xuất rất lớn có tỷ lệ lỗi chung ở a); tính xác suất có ít nhất một lỗi.',
 steps:[R`Đặt D là lỗi. $P(D)=0{,}6\cdot0{,}02+0{,}4\cdot0{,}05=0{,}032$.`,R`Bayes: $P(B\mid D)=0{,}4\cdot0{,}05/0{,}032=5/8$.`,R`Ở c), giả thiết độc lập cho phép dùng nhị thức: $P(X\ge1)=1-(1-0{,}032)^3=0{,}092960768$.`]
},{
 prompt:R`Cho $f_X(x)=kx$ nếu $0\le x\le2$, bằng 0 ngoài khoảng. a) Tìm k. b) Tính $P(1/2<X<3/2)$. c) Tính E(X), E(X²), V(X), rồi suy ra E(3X+2), V(3X+2). d) Tìm CDF và mật độ của Y=X².`,
 steps:[R`a) $1=k\int_0^2x\,dx=2k$, nên $k=1/2$. Mật độ không âm.`,R`b) $P=\int_{1/2}^{3/2}x/2\,dx=[x^2/4]_{1/2}^{3/2}=1/2$.`,R`c) $E(X)=\frac12\int_0^2x^2dx=4/3$; $E(X^2)=\frac12\int_0^2x^3dx=2$. $V(X)=2-16/9=2/9$.`,R`$E(3X+2)=6$; $V(3X+2)=9\cdot2/9=2$.`,R`d) Y thuộc [0,4]. Với $0\le y<4$, $F_Y(y)=P(X\le\sqrt y)=\int_0^{\sqrt y}x/2\,dx=y/4$.`,R`$$F_Y(y)=\begin{cases}0&y<0\\y/4&0\le y<4\\1&y\ge4.\end{cases}$$ $$f_Y(y)=\begin{cases}1/4&0<y<4\\0&\text{ngoài khoảng}.\end{cases}$$`,R`Kiểm tra: $\int_0^4(1/4)dy=1$.`]
}),
E(2,'Củng cố',[
T(R`$\overline{A\cup B}=\overline A\cup\overline B$.`,false,R`De Morgan: $\overline{A\cup B}=\overline A\cap\overline B$.`),
T(R`Chọn 3 người từ 10 người, không xét chức vụ, có $\binom{10}3$ cách.`,true,'Nhóm không xét thứ tự, không lặp người nên dùng tổ hợp.'),
T(R`Nếu P(A),P(B)>0 và A,B xung khắc thì A,B độc lập.`,false,R`$P(AB)=0$ trong khi $P(A)P(B)>0$.`),
T(R`Với X nhận 0,1,2 có p=0,2;0,5;0,3 thì $F_X(1)=0{,}7$.`,true,'CDF gồm cả 0 và 1 nên bằng 0,2+0,5.'),
T(R`Nếu $E(X)=2$ thì $E(3X+1)=7$.`,true,'Tính tuyến tính: 3·2+1=7.'),
T(R`Khi tìm bảng Y=g(X), nếu nhiều X có cùng ảnh thì phải cộng các xác suất.`,true,'Các sự kiện X=x khác nhau xung khắc và cùng dẫn đến giá trị Y đó.'),
T(R`Hàm mật độ xác suất luôn có giá trị không quá 1.`,false,'Ví dụ mật độ 2 trên [0;0,5] có tích phân bằng 1.'),
T(R`Với $Y=aX+b$, luôn có $V(Y)=aV(X)$.`,false,R`Phải là $V(Y)=a^2V(X)$ khi phương sai hữu hạn.`)
],{
prompt:R`Hộp có 8 sản phẩm, gồm 3 lỗi và 5 tốt. Lấy ngẫu nhiên 3 sản phẩm không hoàn lại. X là số lỗi. a) Lập bảng X. b) Tính P(X≤1). c) Tính E(X), V(X).`,
steps:[R`a) $X=0,1,2,3$; $p(k)=\binom3k\binom5{3-k}/\binom83$. Bảng p: $10/56;30/56;15/56;1/56$. Tổng bằng 1.`,R`b) $P(X\le1)=(10+30)/56=5/7$.`,R`c) $E(X)=(30+30+3)/56=9/8$. $E(X^2)=(30+60+9)/56=99/56$.`,R`$V(X)=99/56-81/64=225/448$. Đây là mẫu không hoàn lại, không dùng phương sai nhị thức.`]
},{
prompt:R`Cho $f_X(x)=k(1-x)$ trên [0,1], ngoài bằng 0. a) Tìm k. b) Tính P(1/4<X<3/4). c) Tính E(X), E(X²), V(X), E(2X+1), V(2X+1). d) Tìm CDF và mật độ Y=1−X.`,
steps:[R`a) $k\int_0^1(1-x)dx=k/2=1\Rightarrow k=2$.`,R`b) $P=[2x-x^2]_{1/4}^{3/4}=1/2$.`,R`c) $E(X)=2\int_0^1(x-x^2)dx=1/3$; $E(X^2)=2\int_0^1(x^2-x^3)dx=1/6$.`,R`$V(X)=1/6-1/9=1/18$; $E(2X+1)=5/3$; $V(2X+1)=2/9$.`,R`d) Y thuộc [0,1]. Với $0\le y<1$, $F_Y(y)=P(X\ge1-y)=1-[2(1-y)-(1-y)^2]=y^2$.`,R`$$F_Y(y)=\begin{cases}0&y<0\\y^2&0\le y<1\\1&y\ge1.\end{cases}$$ $$f_Y(y)=\begin{cases}2y&0<y<1\\0&\text{ngoài khoảng}.\end{cases}$$`,R`Kiểm tra $\int_0^12y\,dy=1$.`]
}),
E(3,'Vận dụng',[
T(R`“Ít nhất một trong A,B” được biểu diễn bởi A∪B.`,true,'Hợp gồm chỉ A, chỉ B và cả hai.'),
T(R`Trong định nghĩa cổ điển P(A)=|A|/|Ω|, không cần giả thiết đồng khả năng.`,false,'Tỷ số số phần tử chỉ áp dụng khi hữu hạn và các kết quả sơ cấp đồng khả năng.'),
T(R`$P(A\mid B)=P(B\mid A)$ khi $P(A),P(B)>0$.`,false,R`Nói chung khác nhau: $P(A\mid B)=P(AB)/P(B)$ còn xác suất đảo có mẫu P(A).`),
T(R`Với biến rời rạc bất kỳ, $P(a\le X\le b)=F(b)-F(a)$.`,false,R`Phải dùng $F(b)-F(a^-)$, hoặc cộng lại P(X=a).`),
T(R`$E(X+Y)=E(X)+E(Y)$ không đòi hỏi độc lập khi kỳ vọng hữu hạn.`,true,'Tuyến tính của kỳ vọng đúng cả khi phụ thuộc.'),
T(R`Y=X² luôn có cùng số giá trị phân biệt như X.`,false,'Ví dụ X=−1,1 thì Y chỉ có một giá trị 1.'),
T(R`Với biến có mật độ, P(a<X<b)=P(a≤X≤b).`,true,'Xác suất hai đầu mút đều bằng 0.'),
T(R`Khi $Y=1-X$ và X có mật độ, $F_Y(y)=1-F_X(1-y)$.`,true,R`$P(1-X\le y)=P(X\ge1-y)=1-F_X(1-y)$ vì xác suất tại điểm bằng 0.`)
],{
prompt:'Mỗi cuộc gọi có xác suất được khách nhận là 0,4; các cuộc gọi độc lập. Gọi X là số cuộc được nhận trong 5 cuộc. a) Tính P(X=2). b) Tính P(X≥1). c) Biết ít nhất một cuộc được nhận, tính xác suất đúng hai cuộc được nhận. d) Tính E(X), V(X).',
steps:[R`$X\sim\mathrm{Bin}(5,0{,}4)$. a) $P(X=2)=\binom52 0{,}4^2 0{,}6^3=0{,}3456$.`,R`b) $P(X\ge1)=1-0{,}6^5=0{,}92224$.`,R`c) Vì $\{X=2\}\subset\{X\ge1\}$, $P(X=2\mid X\ge1)=0{,}3456/0{,}92224=540/1441\approx0{,}37474$.`,R`d) $E(X)=2$, $V(X)=5\cdot0{,}4\cdot0{,}6=1{,}2$.`]
},{
prompt:R`Cho $f_X(x)=kx^2$ trên [0,1], ngoài bằng 0. a) Tìm k. b) Tính P(1/2<X<2). c) Tính E(X), E(X²), V(X), E(4X−1), V(4X−1). d) Tìm CDF và mật độ Y=2X+1.`,
steps:[R`a) $k\int_0^1x^2dx=k/3=1\Rightarrow k=3$.`,R`b) Cắt cận trên về 1: $P=\int_{1/2}^13x^2dx=7/8$.`,R`c) $E(X)=3/4$; $E(X^2)=3/5$; $V(X)=3/5-9/16=3/80$.`,R`$E(4X-1)=2$; $V(4X-1)=16\cdot3/80=3/5$.`,R`d) Miền Y=[1,3]. Với $1\le y<3$, $F_Y=P(X\le(y-1)/2)=((y-1)/2)^3$.`,R`$$F_Y(y)=\begin{cases}0&y<1\\(y-1)^3/8&1\le y<3\\1&y\ge3.\end{cases}$$ $$f_Y(y)=\begin{cases}3(y-1)^2/8&1<y<3\\0&\text{ngoài khoảng}.\end{cases}$$`,R`Kiểm tra $\int_1^33(y-1)^2/8\,dy=1$.`]
}),
E(4,'Kết nối',[
T(R`Nếu A⊆B thì A∩B=A.`,true,'Mọi phần tử của A đã thuộc B.'),
T(R`Lấy đồng thời 2 sản phẩm từ 10 sản phẩm phân biệt có 10² kết quả sơ cấp đồng khả năng.`,false,R`Lấy không hoàn lại và không thứ tự có $\binom{10}2=45$ nhóm.`),
T(R`Trong công thức toàn phần, các H_i phải đôi một xung khắc và phủ không gian mẫu.`,true,'Đó là hệ biến cố đầy đủ; mỗi kết quả chỉ thuộc một nhánh nguồn.'),
T(R`Biến rời rạc nhất thiết chỉ nhận số nguyên.`,false,'Biến nhận 0;0,5;1 vẫn rời rạc vì chỉ có hữu hạn giá trị.'),
T(R`$V(X+c)=V(X)+c$ với c là hằng số.`,false,'Dịch chuyển không đổi phương sai: V(X+c)=V(X).'),
T(R`Nếu $Y=2X+1$ thì $P(Y=2x+1)=P(X=x)$.`,true,'Hàm tuyến tính hệ số 2 là đơn ánh nên mỗi ảnh chỉ có một tiền ảnh.'),
T(R`Nếu f(x)=kx trên [0,2], bằng 0 ngoài, thì k=1/2.`,true,R`$\int_0^2kx\,dx=2k=1$.`),
T(R`Với X đều trên [−1,1] và $Y=X^2$, $F_Y(y)=y$ trên [0,1].`,false,R`$F_Y(y)=P(-\sqrt y\le X\le\sqrt y)=\sqrt y$.`)
],{
prompt:R`X nhận −1,0,1,2 với p=0,2;0,3;0,3;0,2. a) Tìm F_X(x). b) Lập bảng Y=X²−X. c) Tính E(Y), V(Y) và kiểm tra E(Y)=E(X²)−E(X).`,
steps:[R`a) F lần lượt bằng 0; 0,2; 0,5; 0,8; 1 trên các khoảng $(-\infty,-1)$; $[-1,0)$; $[0,1)$; $[1,2)$; $[2,\infty)$.`,R`b) Ảnh là 2,0,0,2. Do đó P(Y=0)=0,6, P(Y=2)=0,4.`,R`c) $E(Y)=0{,}8$; $E(Y^2)=1{,}6$; $V(Y)=1{,}6-0{,}64=0{,}96$.`,R`$E(X)=-0{,}2+0{,}3+0{,}4=0{,}5$; $E(X^2)=0{,}2+0{,}3+0{,}8=1{,}3$. Hiệu bằng 0,8, khớp.`]
},{
prompt:R`Cho $f_X(x)=k(1-x^2)$ trên [0,1], ngoài bằng 0. a) Tìm k. b) Tính P(X>1/2). c) Tính E(X), E(X²), V(X), E(2X+3), V(2X+3). d) Tìm CDF và mật độ Y=X².`,
steps:[R`a) $k(1-1/3)=1\Rightarrow k=3/2$.`,R`b) $P=\frac32[x-x^3/3]_{1/2}^1=5/16$.`,R`c) $E(X)=\frac32(1/2-1/4)=3/8$; $E(X^2)=\frac32(1/3-1/5)=1/5$.`,R`$V(X)=19/320$; $E(2X+3)=15/4$; $V(2X+3)=19/80$.`,R`d) Miền Y=[0,1]. Với $0\le y<1$, $F_Y(y)=P(X\le\sqrt y)=\frac32\sqrt y-\frac12y^{3/2}$.`,R`$$F_Y(y)=\begin{cases}0&y<0\\\frac32\sqrt y-\frac12y^{3/2}&0\le y<1\\1&y\ge1.\end{cases}$$`,R`$f_Y(y)=\frac{3(1-y)}{4\sqrt y}$ trên (0,1), ngoài 0. Tích phân $\frac34\int_0^1(y^{-1/2}-y^{1/2})dy=1$.`]
}),
E(5,'Tổng duyệt',[
T(R`Biến cố đối của “cả hai máy hỏng” là “ít nhất một máy hoạt động”.`,true,'Phủ định của “cả hai hỏng” là không phải cả hai hỏng, tức ít nhất một máy hoạt động.'),
T(R`Chọn đều một nhóm 2 người từ 4 nữ, 6 nam thì xác suất cả hai nữ là 2/15.`,true,R`$\binom42/\binom{10}2=6/45=2/15$.`),
T(R`Lấy không hoàn lại từ hộp hữu hạn luôn tạo ra một lược đồ Bernoulli.`,false,'Các lần lấy thường phụ thuộc; xác suất thành công có điều kiện thay đổi.'),
T(R`$F_X(x)$ của biến rời rạc phải liên tục tại mọi x.`,false,'CDF rời rạc có bước nhảy tại các điểm có khối xác suất dương.'),
T(R`Nếu $V(X)=4,V(Y)=6$ và X,Y độc lập thì $V(3X-4Y+5)=132$.`,true,'9·4+16·6=132; hệ số hằng 5 không đóng góp.'),
T(R`Với X=−1,0,1,2 có p=0,2;0,3;0,3;0,2 và Y=|X| thì P(Y=1)=0,5.`,true,'X=−1 hoặc 1 cho Y=1 nên xác suất bằng 0,2+0,3.'),
T(R`Với biến có mật độ, $F_X(x)=\int_{-\infty}^x f_X(t)\,dt$.`,true,'Định nghĩa CDF kết hợp công thức tính xác suất bằng tích phân.'),
T(R`Khi đổi biến $Y=aX+b$, $a\ne0$, mật độ là $f_Y(y)=f_X((y-b)/a)$, không cần hệ số nào.`,false,R`Cần $1/|a|$: $f_Y(y)=f_X((y-b)/a)/|a|$ trên miền Y.`)
],{
prompt:'Một lô có 4 sản phẩm lỗi và 6 tốt. a) Lấy đồng thời 2 sản phẩm, tính xác suất ít nhất một lỗi. b) Thay quy trình: mỗi lần lấy 1 sản phẩm, kiểm tra rồi hoàn lại và trộn đều; làm 3 lần độc lập. Tính xác suất đúng 1 lần lấy lỗi. c) Quy trình b cho số lỗi X; tính E(2X+1), V(2X+1).',
steps:[R`a) Dùng đối: $P=1-\binom62/\binom{10}2=1-15/45=2/3$.`,R`b) Hoàn lại và độc lập: $X\sim\mathrm{Bin}(3,0{,}4)$. $P(X=1)=3\cdot0{,}4\cdot0{,}6^2=0{,}432$.`,R`c) $E(X)=1{,}2$, $V(X)=0{,}72$. Suy ra $E(2X+1)=3{,}4$, $V(2X+1)=2{,}88$.`]
},{
prompt:R`Cho $f_X(x)=k$ trên [−1,1], ngoài bằng 0. a) Tìm k. b) Tính P(−1/2<X<1/4). c) Tính E(X), E(X²), V(X), E(−3X+5), V(−3X+5). d) Tìm CDF và mật độ Y=X².`,
steps:[R`a) $\int_{-1}^1k\,dx=2k=1\Rightarrow k=1/2$.`,R`b) $P=\frac12(1/4+1/2)=3/8$.`,R`c) Do đối xứng $E(X)=0$. $E(X^2)=\frac12\int_{-1}^1x^2dx=1/3$; $V(X)=1/3$.`,R`$E(-3X+5)=5$; $V(-3X+5)=9/3=3$.`,R`d) Miền Y=[0,1]. Với $0\le y<1$, $F_Y(y)=P(-\sqrt y\le X\le\sqrt y)=\sqrt y$. Phải lấy cả hai nhánh.`,R`$$F_Y(y)=\begin{cases}0&y<0\\\sqrt y&0\le y<1\\1&y\ge1.\end{cases}$$ $$f_Y(y)=\begin{cases}1/(2\sqrt y)&0<y<1\\0&\text{ngoài khoảng}.\end{cases}$$`,R`Kiểm tra $\int_0^1(2\sqrt y)^{-1}dy=1$.`]
})
];
