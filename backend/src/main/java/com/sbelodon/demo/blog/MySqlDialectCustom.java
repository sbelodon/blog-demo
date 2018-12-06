package com.sbelodon.demo.blog;

import org.hibernate.dialect.MySQL5Dialect;
import org.hibernate.type.descriptor.sql.BinaryTypeDescriptor;
import org.hibernate.type.descriptor.sql.SqlTypeDescriptor;

import java.sql.Types;

public class MySqlDialectCustom extends MySQL5Dialect {
    public MySqlDialectCustom() {
        registerColumnType(Types.CLOB, "text");
        registerColumnType(Types.BLOB, "longblob");
    }

    @Override
    public SqlTypeDescriptor remapSqlTypeDescriptor(SqlTypeDescriptor sqlTypeDescriptor) {
        if (sqlTypeDescriptor.getSqlType() == java.sql.Types.BLOB) {
            return BinaryTypeDescriptor.INSTANCE;
        }
        return super.remapSqlTypeDescriptor(sqlTypeDescriptor);
    }
}
