from django.db import models

CATEGORY_CHOICES = [
    ('компьютеры в комплекте', 'компьютеры в комплекте'),
    ('системные блоки', 'системные блоки'),
    ('мониторы', 'мониторы'),
    ('спецпредложения', 'спецпредложения'),
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


class Case(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'case'

    def __str__(self):
        return self.name


class Processor(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'processor'

    def __str__(self):
        return self.name


class Motherboard(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'motherboard'

    def __str__(self):
        return self.name


class Fan(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'fan'

    def __str__(self):
        return self.name


class Memory(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'memory'

    def __str__(self):
        return self.name


class Storage(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'storage'

    def __str__(self):
        return self.name


class VideoCard(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'video_card'

    def __str__(self):
        return self.name


class OpticalDrive(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'optical_drive'

    def __str__(self):
        return self.name


class SoundAndNetworkCard(models.Model):
    name = models.CharField(max_length=150)

    class Meta:
        managed = True
        db_table = 'sound_and_network_card'

    def __str__(self):
        return self.name


class SystemUnitDetails(models.Model):
    case = models.ForeignKey(Case, models.DO_NOTHING)
    processor = models.ForeignKey(Processor, models.DO_NOTHING)
    motherboard = models.ForeignKey(Motherboard, models.DO_NOTHING)
    fan = models.ForeignKey(Fan, models.DO_NOTHING)
    memory = models.ForeignKey(Memory, models.DO_NOTHING)
    storage = models.ForeignKey(Storage, models.DO_NOTHING)
    video_card = models.ForeignKey(VideoCard, models.DO_NOTHING)
    optical_drive = models.ForeignKey(OpticalDrive, models.DO_NOTHING)
    sound_and_network_card = models.ForeignKey(SoundAndNetworkCard, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'system_unit_details'

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
    system_unit = models.ForeignKey(SystemUnitDetails, models.DO_NOTHING)
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
    computer_kit = models.ForeignKey(ComputerKitDetails, models.DO_NOTHING)
    system_unit = models.ForeignKey(SystemUnitDetails, models.DO_NOTHING)
    monitor = models.ForeignKey(MonitorDetails, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'product'

    def __str__(self):
        return self.name
