export class ServiceProvider {
    id: string = "";
    name: string = "";
    address1: string = "";
    address2: string = "";
    country: string = "";
    state: string = "";
    city: string = "";
    territory: string = "";
    zip: number = 0;
    fax: number = 0;
    phone: number = 0;
    email: string = "";
    timezone: string = "";
    weekdayHours: string = "";
    weekendHours: string = "";
    sundayHours: string = "";
    serviceId: number = 0;
    spType: string = "";
}

/*
ServiceId INT IDENTITY(1,1),
    ServiceName NVARCHAR(20) NOT NULL UNIQUE,
    Address1 NVARCHAR(30) NOT NULL UNIQUE,
    Address2 NVARCHAR(30),
    Country NVARCHAR(30) NOT NULL,
    City NVARCHAR(30) NOT NULL,
    Territory NVARCHAR(30),
    Zip INT,
    Fax INT,
    Phone INT NOT NULL UNIQUE,
    Email NVARCHAR(30) NOT NULL UNIQUE,,
    TimeZone NVARCHAR(10) NOT NULL UNIQUE,
    WeekDayHours NVARCAHR(20) NOT NULL,
    WeekendDayHours NVARCAHR(20) NOT NULL,
    SundayHours NVARCAHR(20) NOT NULL,
    PRIMARY KEY(ServiceId)
*/
