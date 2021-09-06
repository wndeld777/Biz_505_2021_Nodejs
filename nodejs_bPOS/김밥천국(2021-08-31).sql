use nodedb;
desc tbl_products;
show tables;

drop table tbl_products;
drop table tbl_orders;

INSERT INTO tbl_products(p_code,p_name,p_price)
VALUES 
('P0001','1000원 김밥',1000),
('P0002','참치김밥',2500),
('P0003','어묵해장국',3000),
('P0004','매운 떡볶이',3500),
('P0005','돈가스',4000),
('P0006','치즈 김밥',2500),
('P0007','여름 쫄면',3500),
('P0008','순두부찌개',4000),
('P0009','비빔냉면',4000),
('P0010','마요라면',2000);

Select * from tbl_products;
SELECT * FROM tbl_table_orders;


drop table tbl_products;
drop  table tbl_table_orders;