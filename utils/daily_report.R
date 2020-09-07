# takes Excel version of KML file for Canada COVID-19 map and plots
# statistics
rm(list=ls())

inDir <- "~/Google Drive/Advocacy/COVID-19/daily_data"

require(xlsx)
require(ggplot2)
require(reshape2)

provLevels <- c("Alberta", "British Columbia", "Manitoba", "New Brunswick",
	 "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", 
	"Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", 
	"Yukon")
dt <- format(Sys.Date(),"%y%m%d")
inFile <- "~/Google Drive/Advocacy/COVID-19/Canada_COVID-19_School_Report_Tracker"

# begin code ---------------------------------------
inFile <- sprintf("%s_%s.xlsx",inFile,dt)
dat <- read.xlsx(inFile,1)
fulldat <- dat
dat$Province[grep("Qu",dat$Province)] <- "Quebec"
dat$Province <- factor(dat$Province, levels=provLevels)

dat$X__total__ve <- as.numeric(dat$X__total__ve)
dat$X__students__ve <- as.numeric(dat$X__students__ve)
dat$X__staff__ve <- as.numeric(dat$X__staff__ve)

dat <- dat[,c("Province","Outbreak_status")]

singles <- subset(dat,Outbreak_status=="Single case")
outbreaks <- subset(dat, Outbreak_status=="Outbreak")


# singletons
x <- melt(singles)
p <- ggplot(x, aes(Province)) + geom_bar() 
p <- p + scale_fill_discrete(drop=FALSE) + scale_x_discrete(drop=FALSE) 
p <- p + ylab("Number of schools")
p <- p + theme(axis.text.x = element_text(angle = 90, vjust = 0.5, hjust=1))
p <- p + ggtitle(sprintf(
		"Schools with single COVID-19 cases to date\n%s",dt))
print(p)

# TBA - outbreak 
# num cases by month


