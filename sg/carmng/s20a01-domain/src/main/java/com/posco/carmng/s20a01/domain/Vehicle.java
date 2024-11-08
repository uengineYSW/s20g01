package com.posco.carmng.s20a01.domain;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Vehicle_table")
@Data
public class Vehicle {

    @Id
    private String carrierNo;

    private String worksCode;

    private String companyCode;

    private String carType;

    private String carModel;

    private String usage;

    private String fuelFlag;

    private String partCompanyCd;

    private String ownerTypeCode;

    private String assetNumber;

    private String organizationName;

    private Long acquisitionAmt;

    private String driverEmpNo;

    private String userName;

    private Date registDate;

    private Date reversalDate;

    private String managementNumber;

    private String type;

    private String yearTp;

    private String mdOutputValue;

    private Integer lcaHeight;

    private Long quantity;

    private Integer personCount;

    private Long standardValue;

    private Integer maxCapacity;

    private Integer shortDistance;

    private Integer laneDistance;

    private Integer loadedTravelDistance;

    private Date inspectionDate;

    private String description;

    private Integer weight40Max;

    private Integer width40Max;

    private Integer lengthConstraintKan;

    private Long usedWeight;

    @Embedded
    private DriverId driverId;
}
