-- % : 어디에서나 접근가능
CREATE USER 'node'@'%' identified by '12341234';

-- 모든 권한 부여
GRANT ALL privileges ON *.* TO 'node'@'%';

CREATE DATABASE nodeDB;
USE nodedb;
-- nodejs 에서 primarykey 를 지정해 주지 않으면 자동으로 생성됨
DESC tbl_bbs;
DROP TABLE tbl_bbs;
select * FROM tbl_bbs;