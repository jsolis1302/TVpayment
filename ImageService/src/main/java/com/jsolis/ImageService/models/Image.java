package com.jsolis.ImageService.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.Type;

import java.sql.Types;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int imageId;
    private String name;
    private String type;

    @Lob
   //@Type(type = "org.hibernate.type.ImageType")
    @JdbcTypeCode(Types.LONGVARBINARY)
    private byte[] imageData;
}
