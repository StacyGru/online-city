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


class ScreenResolution(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'screen_resolution'


class MatrixType(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'matrix_type'


class UpdateFrequency(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'update_frequency'


class FrameColor(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'frame_color'


class WallMount(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'wall_mount'


class AspectRatio(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'aspect_ratio'


class MonitorDetails(models.Model):
    manufacturer = models.ForeignKey(Manufacturer, models.DO_NOTHING)
    diagonal = models.IntegerField()
    screen_resolution = models.ForeignKey(ScreenResolution, models.DO_NOTHING)
    matrix_type = models.ForeignKey(MatrixType, models.DO_NOTHING)
    update_frequency = models.ForeignKey(UpdateFrequency, models.DO_NOTHING)
    curved_screen = models.BooleanField()
    frame_color = models.ForeignKey(FrameColor, models.DO_NOTHING)
    wall_mount = models.ForeignKey(WallMount, models.DO_NOTHING)
    aspect_ratio = models.ForeignKey(AspectRatio, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'monitor_details'


# --------------------------------------------------SystemUnitDetails---------------------------------------------------


class AmountOfRAM(models.Model):
    name = models.CharField(max_length=150, null=True)

    class Meta:
        managed = True
        db_table = 'amount_of_ram'


class ProcessorSeries(models.Model):
    name = models.CharField(max_length=150, null=True)

    class Meta:
        managed = True
        db_table = 'processor_series'


class VideoCard(models.Model):
    name = models.CharField(max_length=150, null=True)

    class Meta:
        managed = True
        db_table = 'video_card'


class SystemUnitDetails(models.Model):
    purpose = models.CharField(choices=PURPOSE_CHOICES, max_length=150, null=True)
    amount_of_ram = models.ForeignKey(AmountOfRAM, models.DO_NOTHING)
    processor_series = models.ForeignKey(ProcessorSeries, models.DO_NOTHING)
    hdd_volume = models.IntegerField(null=True, blank=True)
    ssd_volume = models.IntegerField(null=True, blank=True)
    video_card = models.ForeignKey(VideoCard, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'system_unit_filters'


# --------------------------------------------------ComputerKitDetails--------------------------------------------------


class Keyboard(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'keyboard'


class Mouse(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'mouse'


class Speakers(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'speakers'


class ComputerKitDetails(models.Model):
    system_unit = models.ForeignKey(SystemUnitDetails, models.DO_NOTHING)
    monitor = models.ForeignKey(MonitorDetails, models.DO_NOTHING)
    keyboard = models.ForeignKey(Keyboard, models.DO_NOTHING)
    mouse = models.ForeignKey(Mouse, models.DO_NOTHING)
    speakers = models.ForeignKey(Speakers, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'computer_kit_details'


# --------------------------------------------------------Product-------------------------------------------------------


class Product(models.Model):
    name = models.CharField(max_length=200)
    short_description = models.CharField(max_length=500)
    detailed_description = models.CharField(max_length=3000)
    price = models.IntegerField()
    picture = models.ImageField(blank=True)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=150)
    computer_kit = models.ForeignKey(ComputerKitDetails, models.DO_NOTHING, blank=True, null=True)
    system_unit = models.ForeignKey(SystemUnitDetails, models.DO_NOTHING, blank=True, null=True, db_constraint=False)
    monitor = models.ForeignKey(MonitorDetails, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'product'
