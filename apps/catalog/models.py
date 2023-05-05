from django.db import models

CATEGORY_CHOICES = [
    ('компьютеры в комплекте', 'компьютеры в комплекте'),
    ('системные блоки', 'системные блоки'),
    ('мониторы', 'мониторы'),
    ('спецпредложения', 'спецпредложения'),
]

PURPOSE_CHOICES = [
    ('для дома', 'для дома'),
    ('для офиса', 'для офиса'),
    ('для игр', 'для игр'),
]


# ----------------------------------------------------MonitorDetails----------------------------------------------------


class Manufacturer(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'manufacturer'

    def __str__(self):
        return self.name


class Diagonal(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'diagonal'

    def __str__(self):
        return self.name


class ScreenResolution(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'screen_resolution'

    def __str__(self):
        return self.name


class MatrixType(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'matrix_type'

    def __str__(self):
        return self.name


class UpdateFrequency(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'update_frequency'

    def __str__(self):
        return self.name


class CurvedScreen(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'curved_screen'

    def __str__(self):
        return self.name


class Connectors(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'connectors'

    def __str__(self):
        return self.name


class FrameColor(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'frame_color'

    def __str__(self):
        return self.name


class WallMount(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'wall_mount'

    def __str__(self):
        return self.name


class AspectRatio(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'aspect_ratio'

    def __str__(self):
        return self.name


class MonitorDetails(models.Model):
    manufacturer = models.ForeignKey(Manufacturer, models.DO_NOTHING)
    diagonal = models.ForeignKey(Diagonal, models.DO_NOTHING)
    screen_resolution = models.ForeignKey(ScreenResolution, models.DO_NOTHING)
    matrix_type = models.ForeignKey(MatrixType, models.DO_NOTHING)
    update_frequency = models.ForeignKey(UpdateFrequency, models.DO_NOTHING)
    curved_screen = models.ForeignKey(CurvedScreen, models.DO_NOTHING)
    connectors = models.ForeignKey(Connectors, models.DO_NOTHING)
    frame_color = models.ForeignKey(FrameColor, models.DO_NOTHING)
    wall_mount = models.ForeignKey(WallMount, models.DO_NOTHING)
    aspect_ratio = models.ForeignKey(AspectRatio, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'monitor_details'

    def __str__(self):
        return str(self.id)


# --------------------------------------------------SystemUnitDetails---------------------------------------------------


class AmountOfRAM(models.Model):
    name = models.CharField(max_length=150, null=True)

    class Meta:
        managed = True
        db_table = 'amount_of_ram'

    def __str__(self):
        return self.name


class ProcessorSeries(models.Model):
    name = models.CharField(max_length=150, null=True)

    class Meta:
        managed = True
        db_table = 'processor_series'

    def __str__(self):
        return self.name


class HDDVolume(models.Model):
    name = models.CharField(max_length=150, null=True)

    class Meta:
        managed = True
        db_table = 'hdd_volume'

    def __str__(self):
        return self.name


class SSDVolume(models.Model):
    name = models.CharField(max_length=150, null=True)

    class Meta:
        managed = True
        db_table = 'ssd_volume'

    def __str__(self):
        return self.name


class VideoCard(models.Model):
    name = models.CharField(max_length=150, null=True)

    class Meta:
        managed = True
        db_table = 'video_card'

    def __str__(self):
        return self.name


class SystemUnitFilters(models.Model):
    purpose = models.CharField(choices=PURPOSE_CHOICES, max_length=150, null=True)
    amount_of_ram = models.ForeignKey(AmountOfRAM, models.DO_NOTHING)
    processor_series = models.ForeignKey(ProcessorSeries, models.DO_NOTHING)
    hdd_volume = models.ForeignKey(HDDVolume, models.DO_NOTHING)
    ssd_volume = models.ForeignKey(SSDVolume, models.DO_NOTHING)
    video_card = models.ForeignKey(VideoCard, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'system_unit_filters'

    def __str__(self):
        return str(self.id)


# --------------------------------------------------ComputerKitDetails--------------------------------------------------


class Monitor(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'monitor'

    def __str__(self):
        return self.name


class Keyboard(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'keyboard'

    def __str__(self):
        return self.name


class Mouse(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'mouse'

    def __str__(self):
        return self.name


class Speakers(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'speakers'

    def __str__(self):
        return self.name


class ComputerKitDetails(models.Model):
    system_unit = models.ForeignKey(SystemUnitFilters, models.DO_NOTHING)
    monitor = models.ForeignKey(Monitor, models.DO_NOTHING)
    keyboard = models.ForeignKey(Keyboard, models.DO_NOTHING)
    mouse = models.ForeignKey(Mouse, models.DO_NOTHING)
    speakers = models.ForeignKey(Speakers, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'computer_kit_details'

    def __str__(self):
        return str(self.id)


# --------------------------------------------------------Product-------------------------------------------------------


class Product(models.Model):
    name = models.CharField(max_length=200)
    short_description = models.CharField(max_length=500)
    detailed_description = models.CharField(max_length=3000)
    price = models.IntegerField()
    picture = models.ImageField(blank=True)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=150)
    computer_kit = models.ForeignKey(ComputerKitDetails, models.DO_NOTHING, blank=True, null=True)
    system_unit = models.ForeignKey(SystemUnitFilters, models.DO_NOTHING, blank=True, null=True)
    monitor = models.ForeignKey(MonitorDetails, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'product'

    # def __str__(self):
    #     return self.name
